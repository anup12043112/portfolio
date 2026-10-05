import { CheckCircle2, Code2, Database, GoalIcon, Monitor, Settings, Settings2, Sprout, SquareTerminal, Target, Wrench } from "lucide-react"
import "../styles/skills.css"


export default function Skills() {
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

    const tools = [
        { name: "Github", url: "https://ik.imagekit.io/anup2810/Portfolio/Tools/github.png?updatedAt=1790268365804" },
        { name: "Vercel", url: "https://ik.imagekit.io/anup2810/Portfolio/Tools/vercel.png?updatedAt=1790268366060" },
        { name: "VS Code", url: "https://ik.imagekit.io/anup2810/Portfolio/Tools/vscode.svg?updatedAt=1790268366036" },
        { name: "Postman", url: "https://ik.imagekit.io/anup2810/Portfolio/Tools/postman.png?updatedAt=1790268365803" },
        { name: "Git", url: "https://ik.imagekit.io/anup2810/Portfolio/Tools/git.png?updatedAt=1790268365886" }
    ]

    const others = [
        { name: "Rest API", url: "https://ik.imagekit.io/anup2810/Portfolio/Other/restAPI.png?updatedAt=1790268397533" },
        { name: "Linux", url: "https://ik.imagekit.io/anup2810/Portfolio/Other/linux.png?updatedAt=1790268397528" },
        { name: "JSON", url: "https://ik.imagekit.io/anup2810/Portfolio/Other/json.png?updatedAt=1790268397412" },
        { name: "WebSockets", url: "https://ik.imagekit.io/anup2810/Portfolio/Other/websockets.svg?updatedAt=1790268397476" },
        { name: "Google Cloud", url: "https://ik.imagekit.io/anup2810/Portfolio/Other/gc.png?updatedAt=1790268397409" }
    ]

    const goals = [
        "Become a skilled Full-Stack Developer.",
        "Build expertise in Cloud & DevOps.",
        "Master problem-solving & system design.",
        "Create real-world, production-ready projects.",
        "Build a strong professional portfolio.",
        "Gain international work experience, especially in Japan.",
        "Grow into a successful Software Engineer."
    ]

    const currentLearning = [
        "Websockets / Channels",
        "Advanced DRF Validation",
        "Advanced Permissions",
        "JSON Web Tokens",
        "Japanese",
    ]

    return (
        <main className="skills">
            <p className="skillTitle">Skills & <span>Technologies</span></p>
            <p className="skillDesc">I work with a range of modern technologies to build web applications, solve problems and bring ideas to life. Always learning, always improving. </p>
            <section className="skillsSection">

                <section className="skillSetBox fromUp_animation">
                    <span>
                        <Code2 style={{ color: "rgb(0, 102, 255)", width: "1.8rem", height: "1.8rem" }} />
                        Technical Skills
                    </span>
                    <p>Languages, framework, tools and technologies I use.</p>

                    <div className="skillPart">

                        {/* PROGRAMMING LANGUAGES  */}
                        <div className="skillTypeBox">
                            <span style={{ height: "20%" }}>
                                <Code2 style={{ color: "blueviolet" }} />
                                Programming Languages
                            </span>
                            <div className="mySkills">
                                {
                                    lang.map(i => {
                                        return (
                                            <span className="skill">
                                                <img src={i.url} alt="" className="skillImg" />
                                                <p className="skillName">{i.name}</p>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* FRONTEND DEVELOPMENT  */}
                        <div className="skillTypeBox">
                            <span style={{ height: "20%" }}>
                                <Monitor style={{ color: "blueviolet" }} />
                                Frontend Development
                            </span>
                            <div className="mySkills">
                                {
                                    frontend.map(i => {
                                        return (
                                            <span className="skill">
                                                <img src={i.url} alt="" className="skillImg" />
                                                <p className="skillName">{i.name}</p>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="skillPart">

                        {/* DATABASE  */}
                        <div className="skillTypeBox">
                            <span style={{ height: "20%" }}>
                                <Database style={{ color: "blueviolet" }} />
                                Database
                            </span>
                            <div className="mySkills">
                                {
                                    database.map(i => {
                                        return (
                                            <span className="skill">
                                                <img src={i.url} alt="" className="skillImg" />
                                                <p className="skillName">{i.name}</p>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* BACKEND DEVELOPMENT  */}
                        <div className="skillTypeBox">
                            <span style={{ height: "20%" }}>
                                <SquareTerminal style={{ color: "blueviolet" }} />
                                Backend Development
                            </span>
                            <div className="mySkills">
                                {
                                    backend.map(i => {
                                        return (
                                            <span className="skill">
                                                <img src={i.url} alt="" className="skillImg" />
                                                <p className="skillName">{i.name}</p>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="skillPart">

                        {/* TOOLS AND PLATFORMS */}
                        <div className="skillTypeBox">
                            <span style={{ height: "20%" }}>
                                <Wrench style={{ color: "blueviolet" }} />
                                Tools & Platforms
                            </span>
                            <div className="mySkills">
                                {
                                    tools.map(i => {
                                        return (
                                            <span className="skill">
                                                <img src={i.url} alt="" className="skillImg" />
                                                <p className="skillName">{i.name}</p>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* OTHER SKILLS  */}
                        <div className="skillTypeBox">
                            <span style={{ height: "20%" }}>
                                <Settings style={{ color: "blueviolet" }} />
                                Other Skills
                            </span>
                            <div className="mySkills">
                                {
                                    others.map(i => {
                                        return (
                                            <span className="skill">
                                                <img src={i.url} alt="" className="skillImg" />
                                                <p className="skillName">{i.name}</p>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </section>

                <section className="otherInfo fromRight_animation">

                    <div className="goalsBox">
                        <span className="header">
                            <Target style={{ color: "green", width: "1.8rem", height: "1.8rem" }} />
                            Long Term Goals
                        </span>
                        {
                            goals.map(e => {
                                return (
                                    <span className="body">
                                        <CheckCircle2 style={{ color: "blue", width: "1.2rem", height: "1.2rem" }} />{e}</span>
                                )
                            })
                        }
                    </div>

                    <div className="currentLearnigBox">
                        <div className="header">
                            <Sprout style={{ color: "green", width: "1.8rem", height: "1.8rem" }}  />
                            <span className="headerTextSet">
                                <p className="head">Currently Learning</p>
                                <p className="body">Exploring new technologies and strengthening my core skills</p>
                            </span>
                        </div>

                        <div className="currentBox">
                            {
                                currentLearning.map(e => {
                                    return (<p className="currentLearning">{e}</p>)
                                })
                            }
                        </div>
                    </div>
                </section>

            </section>
        </main>
    )
}