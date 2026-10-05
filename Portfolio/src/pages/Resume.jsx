import "../styles/resume.css"
import { BriefcaseBusiness, GraduationCap, Mail, MapPin, Phone, User, Zap, Activity, GlobeCheck, Code2 } from "lucide-react"

export default function Resume() {
    const lang = [
        { name: "Python", url: "https://ik.imagekit.io/anup2810/Portfolio/ProLang/py.png?updatedAt=1790268398098" },
        { name: "JavaScript", url: "https://ik.imagekit.io/anup2810/Portfolio/ProLang/js.png?updatedAt=1790268398085" },
        { name: "Java", url: "https://ik.imagekit.io/anup2810/Portfolio/ProLang/java.png?updatedAt=1790268398005" },
        { name: "C", url: "https://ik.imagekit.io/anup2810/Portfolio/ProLang/c.png?updatedAt=1790268397934" },
        { name: "C++", url: "https://ik.imagekit.io/anup2810/Portfolio/ProLang/cpp.png?updatedAt=1790268398060" }
    ]

    const frontend = [
        { name: "Vite", url: "https://ik.imagekit.io/anup2810/Portfolio/Frontend/vite.png?updatedAt=1790268398002" },
        { name: "CSS", url: "https://ik.imagekit.io/anup2810/Portfolio/Frontend/css.png?updatedAt=1790268397529" },
        { name: "HTML", url: "https://ik.imagekit.io/anup2810/Portfolio/Frontend/html.png?updatedAt=1790268397403" },
        { name: "React", url: "https://ik.imagekit.io/anup2810/Portfolio/Frontend/react.png?updatedAt=1790268397414" }
    ]

    const backend = [
        { name: "DRF", url: "https://ik.imagekit.io/anup2810/Portfolio/Backend/drf.png?updatedAt=1790268398147" },
        { name: "Django", url: "https://ik.imagekit.io/anup2810/Portfolio/Backend/django.png?updatedAt=1790268397941" },
        { name: "Fast API", url: "https://ik.imagekit.io/anup2810/Portfolio/Backend/fastAPI.png?updatedAt=1790268397940" }
    ]

    const database = [
        { name: "SQLite", url: "https://ik.imagekit.io/anup2810/Portfolio/DB/SQLite.svg?updatedAt=1790268397611" },
        { name: "MySQL", url: "https://ik.imagekit.io/anup2810/Portfolio/DB/MySQL.svg?updatedAt=1790268397472" },
        { name: "PostgreSQL", url: "https://ik.imagekit.io/anup2810/Portfolio/DB/postgre.png?updatedAt=1790268397537" }
    ]

    return (
        <main className="resume_main">

            <section className="introSec">

                <div className="intro fromUp_animation">
                    <p className="name">Anup</p>
                    <p className="role">Full Stack Developer</p>

                    <span className="infos_tech">
                        <p className="tech">React</p>
                        <span>|</span>
                        <p className="tech">Python</p>
                        <span>|</span>
                        <p className="tech">Django</p>
                        <span>|</span>
                        <p className="tech">Rest API</p>
                        <span>|</span>
                        <p className="tech">Version Control</p>
                    </span>

                    <p className="desc">I build web applications, solve real problems and turn ideas into meaningful products.</p>

                    <span className="infos">
                        <span><GraduationCap style={{ color: "blue" }} className="infoIcon"  />BCA (Online) - Manipal University, Jaipur</span>
                        <span><BriefcaseBusiness style={{ color: "blue" }} className="infoIcon"  />Open to Opportunities</span>
                        <span><MapPin style={{ color: "blue" }} className="infoIcon"  />India</span>
                    </span>
                </div>

                <div className="socialBox  fromUp_animation">

                    <div className="social">
                        <span className="iconBox"><Mail className="icon" /></span>
                        <span className="socialInfo">
                            <p className="name">Email</p>
                            <p className="url">anup13775@gmail.com</p>
                        </span>
                    </div>

                    <div className="social">
                        <span className="iconBox"><Phone className="icon" /></span>
                        <span className="socialInfo">
                            <p className="name">Phone</p>
                            <p className="url">+91 8471003325</p>
                        </span>
                    </div>

                    <div className="social">
                        <span className="iconBox"><MapPin className="icon" /></span>
                        <span className="socialInfo">
                            <p className="name">Location</p>
                            <p className="url">India</p>
                        </span>
                    </div>

                    <div className="social">
                        <span className="iconBox"><img src="https://ik.imagekit.io/anup2810/Portfolio/Home/Homescreen/github.png?updatedAt=1790268252530" className="icon2" /></span>
                        <span className="socialInfo">
                            <p className="name">Github</p>
                            <p className="url">https://github.com/anup12043112</p>
                        </span>
                    </div>

                    <div className="social">
                        <span className="iconBox"><img src="https://ik.imagekit.io/anup2810/linkedin.png" className="icon2" /></span>
                        <span className="socialInfo">
                            <p className="name">LinkedIn</p>
                            <p className="url">www.linkedin.com/in/anup0209/</p>
                        </span>
                    </div>

                </div>
            </section>




            <section className="summarySec">

                <section className="summaryBox  fromLeft_animation">
                    <div className="header">
                        <User style={{ width: "2rem", height: "2rem", color: "rgb(0, 0, 135)" }} />
                        Professional Summary
                    </div>

                    <div className="body">
                        <p className="summary">I'm Anup, a BCA student and aspiring Full Stack Developer with hands-on experience developing responsive web applications and RESTful APIs using Python, JavaScript, React, Django, and Django REST Framework. Skilled in frontend development, backend development, JWT and token-based authentication, SQL databases, API integration, and Git-based development workflows. Experienced in building and deploying full-stack projects using modern development tools and platforms. Currently expanding expertise in cloud computing, scalable application architecture, and software engineering best practices.
                        </p>
                        <span>
                            <p className="char">Problem Solver</p>
                            <p className="char">Quick Learner</p>
                            <p className="char">Self Motivated</p>
                        </span>
                    </div>
                </section>

                <section className="quickFactsBox fromRight_animation">
                    <div className="header">
                        <Zap style={{ width: "2rem", height: "2rem", color: "rgb(0, 0, 135)" }} />
                        Quick Facts
                    </div>
                    <div className="body">

                        <div className="fact">
                            <div className="factIconName">
                                <User style={{ width: "1.6rem", height: "1.6rem", color: "rgb(0, 0, 123)" }} /> Full Name
                            </div>
                            <div className="factValue">Anup Chaurasiya</div>
                        </div>

                        <div className="fact">
                            <div className="factIconName">
                                <GraduationCap style={{ width: "1.6rem", height: "1.6rem", color: "rgb(0, 0, 123)" }} /> Education
                            </div>
                            <div className="factValue">Bachelor's of Computer Application</div>
                        </div>

                        <div className="fact">
                            <div className="factIconName">
                                <MapPin style={{ width: "1.6rem", height: "1.6rem", color: "rgb(0, 0, 123)" }} /> Location
                            </div>
                            <div className="factValue">Gorakhpur, India</div>
                        </div>

                        <div className="fact">
                            <div className="factIconName">
                                <Activity style={{ width: "1.6rem", height: "1.6rem", color: "rgb(0, 0, 123)" }} /> Experience
                            </div>
                            <div className="factValue">Fresher</div>
                        </div>

                        <div className="fact">
                            <div className="factIconName">
                                <GlobeCheck style={{ width: "1.6rem", height: "1.6rem", color: "rgb(0, 0, 123)" }} /> Availability
                            </div>
                            <div className="factValue">Open to Opportunities</div>
                        </div>
                    </div>
                </section>

                <section className="eduExBox fromLeft_animation">

                    <section className="eduBox">
                        <div className="header_eduExp">
                            <GraduationCap style={{ width: "2rem", height: "2rem", color: "rgb(0, 0, 135)" }} />
                            Education
                        </div>
                        <div className="body_eduExp">
                            <div className="symbolBox">
                                <div className="circle"></div>
                                <div className="line"></div>
                            </div>
                            <div className="infoo">
                                <p className="headEduExp">Manipal University, Jaipur</p>
                                <p className="bodyEduExp">Bachelor's of Computer Application (Online) — 2025-28</p>
                            </div>
                        </div>
                    </section>

                    <section className="expBox">
                        <div className="header_eduExp">
                            <BriefcaseBusiness style={{ width: "2rem", height: "2rem", color: "rgb(0, 0, 135)" }} />
                            Experience
                        </div>
                        <div className="body_eduExp">
                            <div className="symbolBox">
                                <div className="circle"></div>
                                <div className="line"></div>
                            </div>
                            <div className="infoo">
                                <p className="headEduExp">Personal Projects</p>
                                <p className="bodyEduExp">Build multiple Full Stack projects to practice and improve my development skills.</p>
                            </div>
                        </div>
                    </section>

                </section>

                <section className="skillsBox fromRight_animation">
                    <div className="header_skill">
                        <Code2 style={{ width: "2rem", height: "2rem", color: "rgb(0, 0, 135)" }}/>
                        Skills
                    </div>

                    <div className="body_skill">
                        
                        <div className="skillset">
                            <p className="skillType">Programming Language</p>
                            <span className="skillList">
                                {
                                    lang.map(e => {
                                        return (
                                            <span className="skill">
                                                <img src={e.url} alt="" className="skillImg" />
                                                {e.name}
                                            </span>
                                        )
                                    })
                                }
                            </span>
                        </div>
                        
                        <div className="skillset">
                            <p className="skillType">Frontend</p>
                            <span className="skillList">
                                {
                                    frontend.map(e => {
                                        return (
                                            <span className="skill">
                                                <img src={e.url} alt="" className="skillImg" />
                                                {e.name}
                                            </span>
                                        )
                                    })
                                }
                            </span>
                        </div>
                        
                        <div className="skillset">
                            <p className="skillType">Backend</p>
                            <span className="skillList">
                                {
                                    backend.map(e => {
                                        return (
                                            <span className="skill">
                                                <img src={e.url} alt="" className="skillImg" />
                                                {e.name}
                                            </span>
                                        )
                                    })
                                }
                            </span>
                        </div>
                        
                        <div className="skillset">
                            <p className="skillType">Database</p>
                            <span className="skillList">
                                {
                                    database.map(e => {
                                        return (
                                            <span className="skill">
                                                <img src={e.url} alt="" className="skillImg" />
                                                {e.name}
                                            </span>
                                        )
                                    })
                                }
                            </span>
                        </div>
                    </div>
                </section>

            </section>
        </main>
    )
}