import { ArrowRight, Code2, GraduationCap, MapPin, User, Heart, BookOpen, Smartphone, Plane } from "lucide-react"
import "../styles/about.css"
import { Link } from "react-router-dom"
export default function About() {
    const skills = [
        "Python",
        "Java",
        "JavaScript",
        "C/C++",
        "HTML5",
        "CSS3",
        "Node.js",
        "Django",
        "Django Rest Framework ",
        "React",
        "Git",
        "Github",
        "Version Control",
        "Postman",
        "MySQL",
        "POstgreSQL",
        "SQLite",
        "NGROK",
        "JWT",
        "Linux",
        "Google Cloud",
        "Render",
        "Vercel",
    ]
    return (
        <main className="main_about">

            <section className="first">

                <div className="leftHalf fromLeft_animation">
                    <p className="greet">Nice to meet you !</p>
                    <p className="label_aboutMe">ABOUT <purpleTag>ME</purpleTag></p>
                    <p className="role"> Full Stack Developer | Problem Solver | Lifelong Learner</p>
                    <p className="desc">I'm Anup, a passionate Full Stack Developer, currently pursuing Online BCA from Manipal University, Jaipur. I enjoy building clean, scalable and user-friendly application and I'm always eager new technologies and tackle challenging problems</p>
                    <span className="buttons">
                        <a href="/My Resume.pdf" className="resumeDownloadBTN" download>Download Resume</a>
                        <Link className="contactNav" to="/contact">Get in Touch </Link>
                    </span>
                </div>

                <div className="middle fromUp_animation">

                    <div className="infoBox">
                        <User className="infoIcon" />
                        <div className="info">
                            <p className="infoHeader">Name</p>
                            <p className="infoBody">Anup Chaurasiya</p>
                        </div>
                    </div>

                    <div className="infoBox">
                        <GraduationCap className="infoIcon" />
                        <div className="info">
                            <p className="infoHeader">Education</p>
                            <p className="infoBody" >Manipal University, Jaipur</p>
                            <p className="infoBody">Online BCA (2025 - 2028)</p>
                        </div>
                    </div>

                    <div className="infoBox">
                        <MapPin className="infoIcon" />
                        <div className="info">
                            <p className="infoHeader">Location</p>
                            <p className="infoBody">India</p>
                        </div>
                    </div>

                </div>

                <div className="rightHalf fromRight_animation">
                    <img
                        src="https://ik.imagekit.io/anup2810/Portfolio/ChatGPT%20Image%20Sep%2027,%202026,%2002_42_02%20PM.png?updatedAt=1790517518075"
                        alt="Image"
                        className="img" />
                </div>
            </section>


            <section className="second">
                <div className="skillsBox fromLeft_animation">
                    <div className="skillHeaderBox">
                        <span>
                            <Code2 style={{color: "blueviolet"}}/>
                            Skills
                        </span>
                        <Link to="/skills" className="toSkill">
                            View All
                            <ArrowRight />
                        </Link>
                    </div>
                    <div className="skillListing">
                        {
                            skills.map(skill => {
                                return (
                                    <div className="skill" key={skill}>{skill}</div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="eduBox fromDown_animation">
                    <div className="eduHeaderBox">
                        <span>
                            <GraduationCap style={{color: "blueviolet"}}/>
                            Education
                        </span>
                    </div>

                    <div className="eduListing">

                        <div className="edu">
                            <div className="shapes">
                                <div className="circle"></div>
                                <div className="line"></div>
                            </div>
                            <div className="eduInfos">
                                <p className="year">2025 - 2028</p>
                                <p className="type"><strong>Online BCA</strong></p>
                                <p className="class_uni">Manipal University, Jaipur</p>
                            </div>
                        </div>

                        <div className="edu">
                            <div className="shapes">
                                <div className="circle"></div>
                                <div className="line"></div>
                            </div>
                            <div className="eduInfos">
                                <p className="year">2023 - 2024</p>
                                <p className="type"><strong>Higher Secondary</strong></p>
                                <p className="class_uni">12th</p>
                            </div>
                        </div>

                        <div className="edu">
                            <div className="shapes" style={{justifyContent: "left", height: "100%"}}>
                                <div className="circle" ></div>
                            </div>
                            <div className="eduInfos">
                                <p className="year">2021 - 2022</p>
                                <p className="type"><strong>High School</strong></p>
                                <p className="class_uni">10th</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="interestsBox fromRight_animation">
                    <div className="interestsHeaderBox">
                        <span>
                            <Heart style={{color: "blueviolet"}}/>
                            Interests
                        </span>
                    </div>

                    <div className="interestsListing">
                        
                        <div className="interest">
                            <Code2 style={{color: "red"}}/>
                            <div className="interestInfo">
                                <p className="header">Coding & Building Projects</p>
                                <p className="body">Turning ideas into real applications.</p>
                            </div>
                        </div>
                        
                        <div className="interest">
                            <BookOpen style={{color: "blue"}}/>
                            <div className="interestInfo">
                                <p className="header">Anime & Manga</p>
                                <p className="body">Great stories, better mindset.</p>
                            </div>
                        </div>
                        
                        <div className="interest">
                            <Smartphone style={{color: "blueviolet"}}/>
                            <div className="interestInfo">
                                <p className="header">Tech & Gadgets</p>
                                <p className="body">Always curious, always learning.</p>
                            </div>
                        </div>
                        
                        <div className="interest">
                            <Plane style={{color: "green"}}/>
                            <div className="interestInfo">
                                <p className="header">Travel & Explore</p>
                                <p className="body">New places, new perspectives.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}