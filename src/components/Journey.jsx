const experience = [
  {
    title: "React Developer Intern",
    org: "WebDzen Technology",
    period: "Jul 2025 — Sep 2025",
    text: "Built responsive React interfaces, turned design ideas into reusable components, and collaborated with the team on UI fixes and feature delivery.",
  },
]

const education = [
  {
    title: "B.Tech, Computer Science & Engineering",
    org: "Alipurduar Government Engineering & Management College (MAKAUT)",
    period: "2024 — 2028",
    meta: "Currently pursuing",
  },
  {
    title: "Higher Secondary — PCMB",
    org: "West Bengal Council of Higher Secondary Education (WBCHSE)",
    period: "2022",
    meta: "82.80%",
  },
  {
    title: "Secondary",
    org: "West Bengal Board of Secondary Education (WBBSE)",
    period: "2020",
    meta: "85.43%",
  },
]

function Journey() {
  return (
    <section id="journey" className="section section-alt reveal">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2>Professional experience &amp; education.</h2>
          <p>Where I&apos;ve worked and what I&apos;m studying.</p>
        </div>

        <div className="journey-grid">
          <div className="timeline">
            <h3 className="timeline-heading">Experience</h3>

            {experience.map((item) => (
              <article key={item.title} className="timeline-item">
                <span className="timeline-dot" />
                <span className="timeline-period">{item.period}</span>
                <h4>{item.title}</h4>
                <span className="timeline-org">{item.org}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="timeline">
            <h3 className="timeline-heading">Education</h3>

            {education.map((item) => (
              <article key={item.title} className="timeline-item">
                <span className="timeline-dot" />
                <span className="timeline-period">
                  {item.period}
                  {item.meta ? <em> · {item.meta}</em> : null}
                </span>
                <h4>{item.title}</h4>
                <span className="timeline-org">{item.org}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
