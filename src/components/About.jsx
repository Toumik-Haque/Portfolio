const details = [
  { label: "Location", value: "Murshidabad, West Bengal, India" },
  {
    label: "Education",
    value: "B.Tech CSE · AGEMC (MAKAUT), 2024–2028",
  },
  { label: "Experience", value: "React Developer Intern · WebDzen Technology" },
  {
    label: "Email",
    value: "toumikhaque@gmail.com",
    href: "mailto:toumikhaque@gmail.com",
  },
]

function About() {
  return (
    <section id="about" className="section reveal">
      <div className="container about-layout">
        <div className="about-intro">
          <span className="eyebrow">About</span>
          <h2>A developer focused on clarity, craft and usable interfaces.</h2>
        </div>

        <div className="about-content">
          <p className="about-lead">
            I&apos;m Toumik Haque, a frontend developer and B.Tech Computer
            Science &amp; Engineering student at Alipurduar Government
            Engineering &amp; Management College, affiliated with MAKAUT.
          </p>
          <p>
            I build modern, responsive interfaces with React, JavaScript and
            modern CSS. My recent React internship at WebDzen Technology gave me
            hands-on experience turning design ideas into reusable components
            and shipping UI fixes with a team. Alongside frontend work, I&apos;m
            strengthening my problem-solving foundations with DSA in C++.
          </p>
          <p>
            I care about the details that make a product feel considered:
            readable layouts, keyboard-friendly interactions and code that stays
            easy to maintain.
          </p>

          <dl className="about-details">
            {details.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>
                  {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
