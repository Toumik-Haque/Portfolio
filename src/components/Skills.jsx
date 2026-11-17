const groups = [
  {
    title: "Frontend",
    text: "Responsive interfaces and component-driven builds.",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Vite"],
  },
  {
    title: "Programming",
    text: "Core computer science and problem-solving foundations.",
    items: ["C++", "C", "Python", "Data structures", "Algorithms"],
  },
  {
    title: "Backend & tools",
    text: "Supporting tools for full-stack experiments and delivery.",
    items: ["Node.js", "Express", "MongoDB", "REST APIs", "Git", "GitHub"],
  },
]

function Skills() {
  return (
    <section id="skills" className="section section-alt reveal">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Expertise</span>
          <h2>A focused toolkit for building for the web.</h2>
          <p>
            The languages, frameworks and tools I use to turn ideas into
            reliable, polished interfaces.
          </p>
        </div>

        <div className="skill-groups">
          {groups.map((group, index) => (
            <article key={group.title} className="skill-group">
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
