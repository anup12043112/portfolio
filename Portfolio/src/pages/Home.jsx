import { GraduationCap, MapPin } from "lucide-react"
import "../styles/home.css"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <main className="main_home">

            <section className="landing">
                <div className="left">
                    <p className="greet">Hello, I'm</p>
                    <p className="name">Anup</p>
                    <p className="role"> <purpleTag>Full Stack</purpleTag> Developer</p>
                    <p className="desc">I build web applications with Python, Django, DRF, React and a passion of turning ideas into real products.</p>
                    <div className="skillHighlight">
                        <img src="https://ik.imagekit.io/anup2810/Portfolio/Home/Homescreen/react.png?updatedAt=1790268252449" alt="" className="highlight" />
                        <img src="https://ik.imagekit.io/anup2810/Portfolio/Home/Homescreen/postgre.png?updatedAt=1790268252724" alt="" className="highlight" />
                        <img src="https://ik.imagekit.io/anup2810/Portfolio/Home/Homescreen/py.png?updatedAt=1790268252428" alt="" className="highlight" />
                        <img src="https://ik.imagekit.io/anup2810/Portfolio/ProLang/java.png?updatedAt=1790268398005" alt="" className="highlight" />
                        <img src="https://ik.imagekit.io/anup2810/Portfolio/Home/Homescreen/js.png?updatedAt=1790268252337" alt="" className="highlight" />
                        <img src="https://ik.imagekit.io/anup2810/Portfolio/Home/Homescreen/gc.png?updatedAt=1790268252268" alt="" className="highlight" />
                        <img src="https://ik.imagekit.io/anup2810/Portfolio/Home/Homescreen/github.png?updatedAt=1790268252530" alt="" className="highlight" />
                        <img src="https://ik.imagekit.io/anup2810/Portfolio/Tools/postman.png?updatedAt=1790268365803" alt="" className="highlight" />
                        <img src="https://ik.imagekit.io/anup2810/Portfolio/Other/linux.png?updatedAt=1790268397528" alt="" className="highlight" />
                    </div>
                    <span className="buttons">
                        <Link className="projectNav" to="/projects">View My Projects →</Link>
                        <a href="/My Resume.pdf" className="resumeDownloadBTN" download>Download Resume</a>
                    </span>
                </div>
                <div className="right">
                    <img
                        src="https://ik.imagekit.io/anup2810/Portfolio/ChatGPT%20Image%20Sep%2026,%202026,%2007_23_56%20PM.png"
                        alt="Hero Image"
                        className="img" />
                </div>
            </section>

            <section className="about">
                <div className="aboutImgBox">
                    <img
                        src="https://ik.imagekit.io/anup2810/Portfolio/ChatGPT%20Image%20Sep%2024,%202026,%2008_37_02%20PM.png?updatedAt=1790321628265"
                        className="aboutImg" />
                </div>
                <div className="aboutTexts">
                    <p className="aboutHeader">ABOUT ME</p>
                    <p className="introHead">Turning Ideas into Functional Web Applications</p>
                    <p className="intro">I'm Anup, a passionate Full Stack Developer, currently pursuing Online BCA from Manipal University, Jaipur. I enjoy building clean, scalable and user-friendly application and I'm always eager new technologies and tackle challenging problems</p>
                    <span className="infoContainer">

                        <div className="infoBox">
                            <GraduationCap className="infoIcon" />
                            <div className="info">
                                <p className="infoHeader">Manipal University, Jaipur</p>
                                <p className="infoBody">Bachelor's of Computer Application (Online) - 2025-28</p>
                            </div>
                        </div>

                        <div className="infoBox">
                            <MapPin className="infoIcon" />
                            <div className="info">
                                <p className="infoHeader">India</p>
                                <p className="infoBody">Open to remote opportunities</p>
                            </div>
                        </div>
                    </span>
                </div>
            </section>
        </main>
    )
}