import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-scroll"
import { useState } from "react"

function Hero() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [modal, setModal] = useState(false)

    const [openSideNav, setOpenSideNav] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        const res = await fetch("/api/send-email", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        })

        const result = await res.text()
        console.log(result)

        if (res.ok) {
            setModal(true)
            setName('');
            setEmail('');
            setMessage('');
        } else {
            alert('Failed to send message: ' + result);
        }
    }

    return (

        <div className="main">
            {/* Navbar */}
            <div className="navbar fixed-top" style={{ height: '10vh' }}>
                <nav className="container d-flex align-items-center justify-content-between" >
                    <Link to="hero" className="d-flex align-items-center gap-1">
                        <img src="/logo.png" alt="Logo" height="40" className="m-0" />
                        <h3 className="fw-bold m-0 d-none">Portfolio</h3>
                    </Link>
                    <div className="d-flex gap-4 ele">
                        <Link to="about" spy={true} activeclass="active" className="ele nav-links">About</Link>
                        <Link to="skills" spy={true} activeclass="active" className="ele nav-links">Skills</Link>
                        <Link to="projects" spy={true} activeclass="active" className="ele nav-links">Projects</Link>
                    </div>
                    <Link to="contact" className="btn btn-primary rounded-5 ele">Contact</Link>

                    {
                        openSideNav ? (
                            null
                        ) : (
                            <FontAwesomeIcon icon={faBars} className="d-none me-2 nav-toggle" onClick={() => setOpenSideNav(true)} />
                        )
                    }
                </nav>

                {
                    openSideNav && (
                        <div className="side-nav d-flex flex-column align-items-center px-3" style={{ height: '' }}>
                            <div className=" w-100 d-flex align-items-center justify-content-between" style={{ height: '10vh' }}>
                                <Link to="hero" className="d-flex align-items-center gap-1" onClick={() => setOpenSideNav(false)}>
                                    <img src="/logo.png" alt="Logo" height="40" className="m-0" />
                                </Link>
                                <FontAwesomeIcon icon={faXmark} className="d-none nav-toggle me-1" onClick={() => setOpenSideNav(false)} />
                            </div>
                            <div className="container w-100 d-flex flex-column gap-4 mt-3">
                                <Link to="about" spy={true} activeClass="side-active" className="py-2 links" onClick={() => setOpenSideNav(false)}>About</Link>
                                <Link to="skills" spy={true} activeClass="side-active" className="py-2 links" onClick={() => setOpenSideNav(false)}>Skills</Link>
                                <Link to="projects" spy={true} activeClass="side-active" className="py-2 links" onClick={() => setOpenSideNav(false)}>Projects</Link>
                            </div>
                            <Link to="contact" className="btn btn-primary rounded-5 contact-btn mt-5" onClick={() => setOpenSideNav(false)}>Contact</Link>
                        </div>
                    )
                }
            </div>



            {/* Hero Section */}
            <div className="hero d-flex align-items-center" id="hero" style={{ height: '100vh' }}>
                <div className="container d-flex align-items-center justify-content-center">
                    <div className="w-50 container-content">

                        <h5 className="fs-4">Hello, I'm</h5>

                        <div className="d-flex gap-3">
                            <h1 className="fw-bold" style={{ fontSize: '3rem' }}>TOUMIK</h1>
                            <h2 className="text-primary fw-bold" style={{ fontSize: '3rem' }}>HAQUE</h2>
                        </div>

                        <h5 className="mt-2 mb-4 text-secondary" style={{ fontSize: '1.9rem' }}>
                            Frontend Web Developer
                        </h5>

                        <p className="mt-2 para">I design and develop modern, responsive websites with a focus on performance and user experience. With a solid foundation in React, HTML, CSS, and JavaScript, I aim to deliver elegant solutions to real-world needs through clean and efficient code.</p>

                        <div className="mt-4 d-flex gap-3 buttons">
                            <Link to="projects" className="btn btn-primary rounded-0">View My Projects</Link>
                            <a href="/Resume - Toumik Haque.pdf" download className="btn rounded-0 resume-btn">Download Resume</a>
                        </div>

                        <div className="fs-5 d-flex gap-4 mt-4 pt-2 align-items-center">
                            <p className="m-0 mb-1 social-intro">Connect with me →</p>

                            <div className="d-flex gap-4">
                                <a href="http://www.linkedin.com/in/toumik/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
                                </a>

                                <a href="http://github.com/Toumik-Haque" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="social-icon" />
                                </a>

                                <a href="http://www.facebook.com/ToumikHaque.Meta/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                                </a>

                                <a href="http://www.instagram.com/toumik_haque/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-50 d-flex justify-content-center container-content img-box">
                        <div className="border border-4 rounded-circle p-2">
                            <img src="/Toumik.jpeg" alt="Toumik's Photo" width="347" className="rounded-circle" />
                        </div>
                    </div>
                </div>
            </div>



            {/* About Section */}
            <div id="about">
                <div className="container py-5 d-flex justify-content-center" style={{ height: '100vh' }}>
                    <div className="w-50 mt-5 d-flex justify-content-center align-items-center img-container">
                        <img src="./abouticon.png" alt="about" height="350" />
                    </div>
                    <div className="w-50 pt-5 mt-5 px-3 d-flex flex-column align-items-center text-container">
                        <h3 className="text-primary mb-5" style={{ fontSize: '3.5rem' }}>About Me</h3>
                        <p className="text-center">Hello! I’m Toumik Haque, a passionate web developer actively working with technologies like HTML, CSS, JavaScript and React to create dynamic and responsive websites.</p>
                        <p className="text-center">I’m currently pursuing a B.Tech in Computer Science and Engineering at Alipurduar Government Engineering and Management College, affiliated with MAKAUT (Maulana Abul Kalam Azad University of Technology).</p>
                        <p className="text-center">I’m passionate about building user-friendly web applications and constantly learning new tools and technologies.</p>
                    </div>
                </div>
            </div>


            {/* Skills Section */}
            <div id="skills">
                <div className="container py-5 d-flex flex-column justify-content-center" style={{ height: '100vh' }}>

                    <h2 className="text-primary mb-4 text-center" style={{ fontSize: '3.5rem' }}>Skills</h2>
                    <p className="text-center mb-4 fw-medium text-secondary">What I Know and Use to Craft, Code and Create</p>

                    {/* cards */}
                    <div className="skills-cards mt-5 d-flex flex-wrap justify-content-center gap-4">
                        <div className="card icon-card d-flex justify-content-center align-items-center gap-4 px-2 py-4" style={{ width: '12rem' }}>
                            <div className="bg-white icon-box rounded-circle p-4 d-flex justify-content-center align-items-center" style={{ height: '5rem', width: '5rem' }}>
                                <img src="/html.png" alt="html" height="50" />
                            </div>
                            <div className="card p-2 rounded-5 px-3 border icon-title text-center" style={{ width: '100%' }}>
                                HTML
                            </div>
                        </div>
                        <div className="card icon-card d-flex justify-content-center align-items-center gap-4 px-2 py-4" style={{ width: '12rem' }}>
                            <div className="bg-white icon-box rounded-circle p-4 d-flex justify-content-center align-items-center" style={{ height: '5rem', width: '5rem' }}>
                                <img src="/css.png" alt="css" height="50" className="" />
                            </div>
                            <div className="card p-2 rounded-5 px-3 border icon-title text-center" style={{ width: '100%' }}>
                                CSS
                            </div>
                        </div>
                        <div className="card icon-card d-flex justify-content-center align-items-center gap-4 px-2 py-4" style={{ width: '12rem' }}>
                            <div className="bg-white icon-box rounded-circle p-4 d-flex justify-content-center align-items-center" style={{ height: '5rem', width: '5rem' }}>
                                <img src="/bootstrap.png" alt="bootstrap" height="40" />
                            </div>
                            <div className="card p-2 rounded-5 px-3 border icon-title text-center" style={{ width: '100%' }}>
                                Bootstrap
                            </div>
                        </div>
                        <div className="card icon-card d-flex justify-content-center align-items-center gap-4 px-2 py-4" style={{ width: '12rem' }}>
                            <div className="bg-white icon-box rounded-circle p-4 d-flex justify-content-center align-items-center" style={{ height: '5rem', width: '5rem' }}>
                                <img src="/js.png" alt="js" height="40" />
                            </div>
                            <div className="card p-2 rounded-5 px-3 border icon-title text-center" style={{ width: '100%' }}>
                                JavaScript
                            </div>
                        </div>
                        <div className="card icon-card d-flex justify-content-center align-items-center gap-4 px-2 py-4" style={{ width: '12rem' }}>
                            <div className="bg-white icon-box rounded-circle p-4 d-flex justify-content-center align-items-center" style={{ height: '5rem', width: '5rem' }}>
                                <img src="/react.png" alt="react" height="50" />
                            </div>
                            <div className="card p-2 rounded-5 px-3 border icon-title text-center" style={{ width: '100%' }}>
                                React
                            </div>
                        </div>
                        <div className="card icon-card d-flex justify-content-center align-items-center gap-4 px-2 py-4" style={{ width: '12rem' }}>
                            <div className="bg-white icon-box rounded-circle p-4 d-flex justify-content-center align-items-center" style={{ height: '5rem', width: '5rem' }}>
                                <img src="/c.png" alt="c" height="50" />
                            </div>
                            <div className="card p-2 rounded-5 px-3 border icon-title text-center" style={{ width: '100%' }}>
                                C
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Projects Section */}
            <div id="projects">
                <div className="container py-3 d-flex flex-column" style={{ height: '100vh' }}>

                    <h2 className=" mb-4 mt-5 pt-4 text-center text-primary" style={{ fontSize: '3rem' }}>Projects</h2>
                    <p className="text-center mb-4 fw-medium text-secondary">Each project, a step forward in my learning</p>

                    {/* cards */}
                    <div className="projects-cards mt-4 d-flex flex-wrap justify-content-around">
                        <div className="card" style={{ width: '20rem' }}>
                            <img src="/ecom.png" className="card-img-top" alt="ecommerce" />
                            <div className="card-body d-flex flex-column gap-2">
                                <h5 className="card-title mt-1">Ecommerce Website</h5>
                                <p className="card-text text-secondary">A responsive ecommerce site built with React. Users can browse products, manage cart, and checkout. Includes login/logout and MongoDB Atlas for secure data storage.</p>
                                <a href="https://github.com/Toumik-Haque/E-Commerce" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                        <div className="card" style={{ width: '20rem' }}>
                            <img src="/todo.png" className="card-img-top" alt="ToDoApp" />
                            <div className="card-body d-flex flex-column gap-2">
                                <h5 className="card-title mt-1">ToDo App</h5>
                                <p className="card-text text-secondary">A modern task management app built using React. Users can add, edit, delete, and mark tasks as complete. Clean User-friendly interface, persistent storage via MongoDB Atlas.</p>
                                <a href="https://github.com/Toumik-Haque/ToDo-App" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                        <div className="card" style={{ width: '20rem' }}>
                            <img src="/clone.png" alt="Penman" className="card-img-top" />

                            <div className="card-body d-flex flex-column gap-2">
                                <h5 className="card-title mt-1">Your Penman Clone</h5>
                                <p className="card-text text-secondary">A responsive homepage clone of the Your Penman website, built using pure HTML and CSS. This project was a frontend practice to enhance my skills in layout design.</p>
                                <a href="https://github.com/Toumik-Haque/Your-Penman-Website-Clone" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Contact Section */}
            <div id="contact" style={{ height: '100vh' }}>
                <div className="container py-5 d-flex justify-content-center" >
                    <div className="w-50 mt-5">
                        <h2 className="text-primary" style={{ fontSize: '3.5rem' }}>Contact Me</h2>
                        <p>Feel free to get in touch with me.</p>
                        <div className="card email-card w-50 p-3 mt-5" >
                            <p className="fw-bold fs-4 mb-2">Email</p>
                            <span><a className="text-decoration-none text-primary" href="mailto:toumik@zohomail.in">toumik@zohomail.in</a></span>
                        </div>

                        <div className="contact-social fs-5 mt-3 ms-3 d-flex gap-4 align-items-center">

                            <a href="http://www.linkedin.com/in/toumik/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
                            </a>

                            <a href="http://github.com/Toumik-Haque" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="social-icon" />
                            </a>

                            <a href="http://www.facebook.com/ToumikHaque.Meta/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                            </a>

                            <a href="http://www.instagram.com/toumik_haque/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                            </a>
                        </div>

                    </div>

                    <div className="form-box w-50 mt-5 d-flex flex-column justify-content-cente align-items-center px-5">
                        <img src="/contact.png" alt="card" height="500" width="350" className="rounded-4 mt-5 mb-4 contactcard"/>
   
                        {/* <form onSubmit={handleSubmit} className="m-5 d-flex flex-column gap-4">
                            <div className="d-flex flex-column gap-2">
                                <label className="fw-bold">Name</label>
                                <input className="p-2 rounded form-control" placeholder="Your Name" type="text" onChange={(e) => setName(e.target.value)} value={name} required />
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <label className="fw-bold">Email</label>
                                <input className="p-2 rounded form-control" placeholder="Your Email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <label className="fw-bold">Message</label>
                                <textarea className="p-2 rounded form-control" placeholder="Your Message" rows="4" onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
                            </div>
                            <div className="">
                                <button type="submit" className="btn btn-primary w-50">Send Message</button>
                            </div>
                        </form> */}

                    </div>
                </div>
                <div className="container">
                    <a href="/sitemap.xml" download className="px-0 pb-3 sitemap">Sitemap</a>
                </div>
            </div>


            {
                modal ? (
                    <div className="modal d-block modal-bg" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content py-3">
                                <div className="modal-body d-flex flex-column gap-3 align-items-center">
                                    <p className="fw-medium fs-5 text-primary mb-0" >Message Sent Successfully!</p>
                                    <button type="button" className="btn btn-primary" onClick={() => setModal(false)}>OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>

    )

}

export default Hero