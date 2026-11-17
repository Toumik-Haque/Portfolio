import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk
      if (body.length > 1_000_000) {
        reject(new Error('Request body is too large'))
        req.destroy()
      }
    })

    req.on('end', () => {
      if (!body) {
        resolve({})
        return
      }

      try {
        resolve(JSON.parse(body))
      } catch {
        reject(new Error('Invalid JSON body'))
      }
    })

    req.on('error', reject)
  })
}

function localApiPlugin(env) {
  return {
    name: 'local-api',
    apply: 'serve',
    configureServer(server) {
      const keys = [
        'BREVO_API_KEY',
        'BREVO_SENDER_EMAIL',
        'BREVO_SENDER_NAME',
        'TO_EMAIL',
      ]

      keys.forEach((key) => {
        if (env[key] && !process.env[key]) {
          process.env[key] = env[key]
        }
      })

      server.middlewares.use('/api/send-email', async (req, res) => {
        res.status = (code) => {
          res.statusCode = code
          return res
        }

        res.json = (payload) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(payload))
          return res
        }

        try {
          req.body = await readJsonBody(req)
        } catch (error) {
          res.status(400).json({ error: error.message })
          return
        }

        try {
          const { default: handler } = await import('./api/send-email.js')
          await handler(req, res)
        } catch (error) {
          if (!res.writableEnded) {
            res.status(500).json({ error: error.message })
          }
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), localApiPlugin(env)],
  }
})
