import "../styles/components/navbar.css"
import { useLocation, Link } from "react-router-dom"
import { useState } from "react"
import navIcon from "../assets/navicon.webp"
import { Home, User, CodeXml, FolderKanban, FileText, Mail } from "lucide-react"

export default function Navbar() {
    const loc = useLocation()
    const [showMenu, setShowMenu] = useState(false)
    // const check = loc.pathname.includes("about")
    return (
        <>
            <nav className="nav">
                <span className="logo">
                    <img src={navIcon} alt="nav-icon" className="logoImg" />
                    <p className="header">Er. <pinkHeader>Anup ~</pinkHeader></p>
                </span>
                <div className={`${showMenu ? "nav_mobile" : "nav_desktop"}`}>
                    <Link to="/home" className={`navBTN ${loc.pathname.includes("home") ? "current" : ""}`}>
                        <Home className="navIcon" />
                        Home 
                    </Link>

                    <Link to="/about" className={`navBTN ${loc.pathname.includes("about") ? "current" : ""}`}>
                    <User className="navIcon" />
                    About</Link>

                    <Link to="/skills" className={`navBTN ${loc.pathname.includes("skills") ? "current" : ""}`}>
                    <CodeXml className="navIcon" />
                    Skills</Link>

                    <Link to="/projects" className={`navBTN ${loc.pathname.includes("projects") ? "current" : ""}`}>
                    <FolderKanban className="navIcon" />
                    Project</Link>

                    <Link to="/resume" className={`navBTN ${loc.pathname.includes("resume") ? "current" : ""}`}>
                    <FileText className="navIcon" />
                    Resume</Link>

                    <Link to="/contact" className={`navBTN ${loc.pathname.includes("contact") ? "current" : ""}`}>
                    <Mail className="navIcon" />
                    Contact</Link>

                </div>
                <button className="navToggleBTN" onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? "⨉" : "≡"}
                </button>
            </nav>
        </>
    )
}