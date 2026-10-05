import { useState } from "react";
import "../styles/projects.css"
import icon from "../assets/scriptIcon.png"


function RenderProjects() {
    const projects = [
        {
            name: "School Management System",
            desc: "A full-stack school management platform with separate dashboards and role-based access for Admins, Teachers, Students and Parents.",
            tech: ["React", "Django", "DRF", "PostgreSQL", "JWT"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/School%20Management%20System.png?updatedAt=1790655762521",
            repo: ""
        },
        {
            name: "AnuRi Repair Shop",
            desc: "A service-based repair shop platform with a responsive React interface and a Django REST API for managing repair services.",
            tech: ["React", "Vite", "Django", "DRF", "SQLite"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/AnuRiRepairShop.png?updatedAt=1790655802598",
            repo: "https://github.com/anup12043112/AnuRi-Repair-Shop-Frontend"
        },
        {
            name: "Student Registration System",
            desc: "A student registration platform with course selection, registration management, an admin dashboard and token-based authentication.",
            tech: ["React", "Vite", "Django", "DRF", "Token Authentication", "PostgreSQL"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/Student%20Registration%20System.png?updatedAt=1790655761168",
            repo: "https://github.com/anup12043112/Student-Registration-System"
        },
        {
            name: "LAN Share",
            desc: "A local network file-sharing application with device discovery, WebSocket communication and chunked file transfers with progress tracking.",
            tech: ["React", "Django", "Django Channels", "WebSocket", "Async Python"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/LANShare.jpg?updatedAt=1790655760406",
            repo: ""
        },
        {
            name: "Product Management System",
            desc: "A full-stack product management application with JWT authentication, protected routes and owner-based product access.",
            tech: ["React", "Django", "DRF", "SimpleJWT", "PostgreSQL"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/Product%20Card.png?updatedAt=1790655760328",
            repo: ""
        },
        {
            name: "MediConnect",
            desc: "A telemedicine platform connecting patients with doctors through authentication, appointment management and browser-based video consultation rooms.",
            tech: ["React", "Vite", "React Router", "Firebase", "Google OAuth", "CSS3"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/Mediconnect.png?updatedAt=1790655760117",
            repo: "https://github.com/anup12043112/mediconnect"
        },
        {
            name: "LearnX",
            desc: "An interactive learning platform with structured courses, quizzes, XP-based gamification, learner progress tracking and a recruiter portal.",
            tech: ["React", "Vite", "Context API", "React Router", "Lucide React", "JSON"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/LearnX.png?updatedAt=1790655760093",
            repo: "https://github.com/anup12043112/learning-platform"
        },
        {
            name: "Snake Game",
            desc: "A classic Snake game built from scratch with grid-based gameplay, collision detection, keyboard controls and persistent high scores.",
            tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/Snake%20Game.png?updatedAt=1790655760423",
            repo: "https://github.com/anup12043112/snake-game"
        },
        {
            name: "Naruto Themed Clock",
            desc: "A responsive Naruto-themed clock featuring real-time clock functionality with custom anime-inspired visuals and layouts.",
            tech: ["HTML5", "CSS3", "JavaScript"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/NarutoThemedClock.png?updatedAt=1790655761831",
            repo: "https://github.com/anup12043112/Naruto-Themed-Clock"
        },
        {
            name: "Dominant Classes",
            desc: "An educational website created for Dominant Classes with sections for classes, subjects and other educational information.",
            tech: ["HTML5", "CSS3", "JavaScript"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/DominantClasses.png?updatedAt=1790655761570",
            repo: "https://github.com/anup12043112/Project--Demo_Website"
        },
        {
            name: "Siddhant Classes",
            desc: "An educational website presenting class information and learning content through a responsive web interface.",
            tech: ["HTML5", "CSS3", "JavaScript"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/ShiddhantClasses.png?updatedAt=1790655762243",
            repo: "https://github.com/anup12043112/Project--Demo_Website_2"
        },
        {
            name: "Text to QR Code",
            desc: "A simple web utility that converts user-entered text into a QR code and allows the generated QR code to be downloaded.",
            tech: ["HTML5", "CSS3", "JavaScript", "QR Code API"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/Text-QR.png?updatedAt=1790655759461",
            repo: "https://github.com/anup12043112/Project--Text-to-QR-generator"
        },
        {
            name: "Random Color Generator",
            desc: "An interactive color generator that creates random colors and dynamically applies them to the interface.",
            tech: ["HTML5", "CSS3", "JavaScript", "DOM"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/RandomColor.png?updatedAt=1790655759695",
            repo: "https://github.com/anup12043112/Project--Random-Color-Generator"
        },
        {
            name: "Login / SignUp Page",
            desc: "A responsive authentication interface featuring custom login and signup forms with interactive UI elements.",
            tech: ["HTML5", "CSS3", "JavaScript"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/LoginPage.png?updatedAt=1790655759559",
            repo: "https://github.com/anup12043112/Web-Project--Login_Page"
        },
        {
            name: "Digital Clock",
            desc: "A simple real-time digital clock that displays the current time with a custom responsive interface and styling.",
            tech: ["HTML5", "CSS3", "JavaScript"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/DigitalClock.png?updatedAt=1790655759378",
            repo: "https://github.com/anup12043112/Project--Digital-Clock"
        },
        {
            name: "Random Password Generator",
            desc: "A browser-based utility that generates random passwords and provides an option to copy the generated password.",
            tech: ["HTML5", "CSS3", "JavaScript", "DOM"],
            image: "https://ik.imagekit.io/anup2810/Portfolio/Projects/RandomPassword.png?updatedAt=1790655759629",
            repo: "https://github.com/anup12043112/Project--Random-Password-Generator"
        }
    ];

    return (
        projects.map(i => {
            return (
                <div className="project fromDown_animation">
                    <span className="projectImageBox">
                        <img src={i.image} alt="" className="imgProject" />
                    </span>
                    <span className="aboutProject">
                        <p className="projectTitle">{i.name}</p>
                        <p className="projectDesc">{i.desc}</p>
                        <span className="techs">
                            {
                                i.tech.map(t => {
                                    return (
                                        <p className="techUsed">{t}</p>
                                    )
                                })
                            }
                        </span>
                    </span>
                    <span className="github">
                        <img src="https://ik.imagekit.io/anup2810/Portfolio/Tools/github.png?updatedAt=1790268365804" alt="" className="ghIcon" />
                        {
                            i.repo ? <a href={i.repo} className="label1" target="_blank">View Code</a> : <p className="label0">Not pushed yet</p>
                        }
                    </span>
                </div>
            )
        })
    )
}

function RenderScripts() {
    const scripts = [
        {
            name: "Smart Data Extractor",
            desc: "Extracts emails, phone numbers and PIN codes from unstructured text using Regular Expressions.",
            tech: ["Python", "Django", "Regex"],
            url: "https://github.com/anup12043112/smart-data-extractor"
        },
        {
            name: "Stack Manager",
            desc: "A menu-driven C program implementing stack operations with an array-based data structure.",
            tech: ["C", "Arrays", "Stack", "LIFO"],
            url: "https://github.com/anup12043112/stack-manager-C"
        },
        {
            name: "ToDo List in C",
            desc: "A command-line task manager using singly linked lists for dynamic task creation and deletion.",
            tech: ["C", "Linked List", "Pointers", "Dynamic Memory"],
            url: "https://github.com/anup12043112/todo-list-in-c"
        },
        {
            name: "Dynamic CSV Generator",
            desc: "A Python CLI utility for creating custom CSV files with dynamic schemas, validation and data preview.",
            tech: ["Python", "CSV", "File Handling", "CLI"],
            url: "https://github.com/anup12043112/Dynamic-CSV-Generator"
        }
    ];

    return (
        <div className="scriptContainer fromDown_animation">
            {scripts.map(i => {
                return (

                    <div className="script">
                        <span className="scriptImageBox">
                            <img src={icon} alt="" className="imgScript" />
                        </span>
                        <span className="aboutScript">
                            <p className="scriptTitle">{i.name}</p>
                            <p className="scriptDesc">{i.desc}</p>
                            <span className="techsScript">
                                {
                                    i.tech.map(t => {
                                        return (
                                            <p className="techUsed">{t}</p>
                                        )
                                    })
                                }
                            </span>
                            <span className="github">
                                <img src="https://ik.imagekit.io/anup2810/Portfolio/Tools/github.png?updatedAt=1790268365804" alt="" className="ghIcon" />
                                {
                                    i.url ? <a href={i.url} className="label1" target="_blank">View Code</a> : <p className="label0">Not pushed yet</p>
                                }
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}
export default function Projects() {
    const [selectedCat, setSelectedCat] = useState("all")

    return (
        <main className="projects_main">
            <span className="pageIntro fromLeft_animation">
                <p className="projectsPage_header">Featured <span>Projects</span></p>
                <p className="projectsPage_desc">Here are some of the projects I've built since I started learning <strong>Web Development</strong>. With every project, I improved my skills ~ starting from just a <strong>Random Password Generator or Random Color Generator</strong> based on beginner level <strong>HTML/CSS/JavaScript</strong> to building <strong>Full Stack Web Apps</strong> like <strong>School Management System, LAN Share etc.</strong></p>
            </span>

            <span className="projects_category fromLeft_animation">
                <button className={`categoryBTN ${selectedCat === "all" ? "selected" : ""}`} onClick={() => setSelectedCat("all")}>All</button>
                <button className={`categoryBTN ${selectedCat === "projects" ? "selected" : ""}`} onClick={() => setSelectedCat("projects")}>Projects</button>
                <button className={`categoryBTN ${selectedCat === "script" ? "selected" : ""}`} onClick={() => setSelectedCat("script")}>Script/Tools</button>
            </span>

            <section className="projectShowcase  fromRight_animation">
                {
                    selectedCat === "all" ? (
                        <>
                            <RenderProjects />
                            <RenderScripts />
                        </>
                    ) : (
                        selectedCat === "projects" ? (
                            <RenderProjects />
                        ) : (
                            selectedCat === "script" ? (
                                <RenderScripts />
                            ) : (
                                <p>Nothing to show</p>
                            )
                        )
                    )
                }
            </section>
        </main>
    )
}