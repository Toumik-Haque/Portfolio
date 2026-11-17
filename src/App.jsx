import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Journey from "./components/Journey"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
