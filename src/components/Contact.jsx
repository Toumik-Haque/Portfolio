import { useState } from "react"
import { FaExternalLinkAlt, FaPaperPlane } from "react-icons/fa"

const channels = [
  {
    label: "Email",
    value: "toumikhaque@gmail.com",
    href: "mailto:toumikhaque@gmail.com",
  },
  {
    label: "Location",
    value: "Murshidabad, West Bengal, India",
  },
]

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState("")

  const update = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus("sending")
    setError("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || "Could not send your message.")
      }

      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      setStatus("error")
      setError(err.message)
    }
  }

  return (
    <section id="contact" className="section reveal">
      <div className="container">
        <div className="contact-card">
          <div className="contact-info">
            <span className="eyebrow">Contact</span>
            <h2>Have a project or role in mind?</h2>
            <p>
              I&apos;m open to internships, freelance work and frontend
              collaborations. Send a message or reach me directly.
            </p>

            <ul className="contact-channels">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <span>{channel.label}</span>
                  {channel.href ? (
                    <a href={channel.href}>
                      {channel.value} <FaExternalLinkAlt />
                    </a>
                  ) : (
                    <strong>{channel.value}</strong>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={update}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={update}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me a little about your idea…"
                value={form.message}
                onChange={update}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                "Sending…"
              ) : (
                <>
                  Send message <FaPaperPlane />
                </>
              )}
            </button>

            <p className={`form-status ${status}`} aria-live="polite">
              {status === "success" &&
                "Thanks for reaching out — I'll get back to you soon!"}
              {status === "error" && error}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
