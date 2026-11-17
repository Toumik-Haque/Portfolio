import { FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    title: "CodeSphere",
    subtitle: "The Engineers' Logic Club",
    description:
      "A full-stack community platform for Alipurduar Government Engineering & Management College, with authentication, events, XP, badges and open contribution.",
    tags: ["React", "Node.js", "MongoDB"],
    language: "Full-stack",
    year: "2026",
    cover: "CS",
    link: "https://github.com/Toumik-Haque/CodeSphere",
  },
  {
    title: "EduAdapt",
    subtitle: "Adaptive education ecosystem",
    description:
      "A responsive React frontend exploring adaptive learning flows and a more personal education experience.",
    tags: ["React", "Vite", "CSS"],
    language: "Frontend",
    year: "2026",
    cover: "EA",
    link: "https://github.com/Toumik-Haque/EduAdapt",
  },
  {
    title: "hostelLog",
    subtitle: "Hostel management system",
    description:
      "A hostel management system with email OTP registration, role-based access, presence tracking and admin approvals.",
    tags: ["React", "Node.js", "MongoDB"],
    language: "Full-stack",
    year: "2026",
    cover: "HL",
    link: "https://github.com/Toumik-Haque/hostelLog",
  },
]

function Projects() {
  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2>Three projects, built end to end.</h2>
          <p>
            A focused selection of full-stack and frontend work, each built to
            solve a real problem with clean, maintainable code.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={project.title} className="project-card">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-media"
                aria-label={`Open ${project.title} on GitHub`}
              >
                <span className="project-cover">
                  <span className="project-cover-top">{project.language}</span>
                  <span className="project-cover-mark">{project.cover}</span>
                  <span className="project-cover-year">{project.year}</span>
                </span>
                <span className="project-hover">
                  <FaExternalLinkAlt />
                </span>
              </a>

              <div className="project-body">
                <div className="project-topline">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.year}</span>
                </div>

                <h3>{project.title}</h3>
                <span className="project-subtitle">{project.subtitle}</span>
                <p>{project.description}</p>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View repository <FaExternalLinkAlt />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="projects-action">
          <p>
            More experiments, practice builds and open-source work are
            available on GitHub.
          </p>
          <a
            href="https://github.com/Toumik-Haque?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            View all repositories <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
