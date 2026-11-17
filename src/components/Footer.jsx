import { FaArrowUp, FaGithub, FaLinkedinIn } from "react-icons/fa"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <span className="brand-toumik">Toumik</span>
            <span className="brand-haque">
              Haque<span className="brand-dot">.</span>
            </span>
          </a>
          <p>
            Frontend developer &amp; B.Tech CSE student building thoughtful web
            experiences.
          </p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Expertise</a>
          <a href="#projects">Work</a>
          <a href="#journey">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-actions">
          <div className="socials">
            <a
              href="https://github.com/Toumik-Haque"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/toumik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <a href="#home" className="back-to-top" aria-label="Back to top">
            <FaArrowUp />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} Toumik Haque. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
