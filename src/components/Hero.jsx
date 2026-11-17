import {
  FaArrowRight,
  FaBriefcase,
  FaExternalLinkAlt,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa"

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="pill">
            <FaBriefcase className="pill-icon" aria-hidden="true" />
            Available for internships &amp; freelance
          </span>

          <p className="hero-kicker">Toumik Haque</p>

          <h1 className="hero-title">
            Frontend developer building{" "}
            <span className="accent-text">thoughtful</span> web experiences.
          </h1>

          <p className="hero-text">
            B.Tech CSE student at AGEMC (MAKAUT) with a React internship at
            WebDzen Technology. I build responsive, accessible interfaces with
            maintainable front-end code.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View selected work <FaArrowRight />
            </a>
            <a
              href="/Resume - Toumik Haque.pdf"
              download
              className="btn btn-ghost"
            >
              <FaDownload /> Download resume
            </a>
          </div>

          <div className="hero-links">
            <a
              href="https://github.com/Toumik-Haque"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub <FaExternalLinkAlt />
            </a>
            <a
              href="https://www.linkedin.com/in/toumik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn /> LinkedIn <FaExternalLinkAlt />
            </a>
            <a href="mailto:toumikhaque@gmail.com">
              <FaEnvelope /> Email <FaExternalLinkAlt />
            </a>
          </div>
        </div>

        <figure className="hero-portrait">
          <div className="portrait-frame">
            <img
              src="/toumik-haque.png"
              alt="Portrait of Toumik Haque"
              width="460"
              height="460"
              loading="eager"
              decoding="async"
            />
          </div>
          <figcaption>
            <span>Frontend Developer</span>
            <span>B.Tech CSE &apos;28</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Hero
