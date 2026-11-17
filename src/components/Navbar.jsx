import { useEffect, useState } from "react"
import { FaBars, FaGithub, FaLinkedinIn, FaTimes } from "react-icons/fa"

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Expertise" },
  { id: "projects", label: "Work" },
  { id: "journey", label: "Experience" },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return undefined

    let frame = 0

    const updateActive = () => {
      frame = 0
      const marker = window.innerHeight * 0.35
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= marker && rect.bottom > marker
      })

      setActive(current ? current.id : "")
    }

    const queueUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateActive)
    }

    updateActive()
    window.addEventListener("scroll", queueUpdate, { passive: true })
    window.addEventListener("resize", queueUpdate)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", queueUpdate)
      window.removeEventListener("resize", queueUpdate)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 981px)")
    const onChange = (event) => {
      if (event.matches) setOpen(false)
    }

    desktop.addEventListener("change", onChange)
    return () => desktop.removeEventListener("change", onChange)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${
        open ? "is-menu-open" : ""
      }`}
    >
      <nav className="nav container" aria-label="Main navigation">
        <a
          href="#home"
          className="brand"
          aria-label="Toumik Haque — home"
          onClick={closeMenu}
        >
          <span className="brand-toumik">Toumik</span>
          <span className="brand-haque">
            Haque<span className="brand-dot">.</span>
          </span>
        </a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? "is-active" : ""}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            href="#contact"
            className="btn btn-primary nav-cta"
            onClick={closeMenu}
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <ul className="mobile-nav-list">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="mobile-menu-contact">
            <a href="#contact" onClick={closeMenu}>
              Let&apos;s talk
            </a>
          </li>
        </ul>

        <div className="mobile-menu-footer">
          <a
            href="mailto:toumikhaque@gmail.com"
            className="mobile-menu-email"
            onClick={closeMenu}
          >
            toumikhaque@gmail.com
          </a>

          <a
            href="/Resume - Toumik Haque.pdf"
            download
            className="btn btn-primary"
            onClick={closeMenu}
          >
            Download Résumé
          </a>

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
        </div>
      </div>
    </header>
  )
}

export default Navbar
