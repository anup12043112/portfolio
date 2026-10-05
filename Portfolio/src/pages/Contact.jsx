import "../styles/contacts.css"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
    return (
        <main className="contact_main">

            <section className="contactInfoSec fromUp_animation">
                <p className="getIn">GET IN TOUCH</p>
                <p className="headText">Let's Build</p>
                <p className="headText">Something <span>Great</span></p>
                <p className="desc" style={{ marginTop: ".6rem" }}>Have a project in mind, a question or just want to contact ?</p>
                <p className="desc">Feel free to reach out ~ I'd love to hear from you !</p>

                {/* EMAIL  */}
                <div className="contact" style={{ marginTop: "1.8rem" }}>
                    <span className="contact_icon">
                        <Mail className="icon" />
                    </span>
                    <span className="contact_info">
                        <p className="contactName">Email</p>
                        <p className="contactValue">anup13775@gmail.com</p>
                    </span>
                </div>

                {/* PHONE  */}
                <div className="contact">
                    <span className="contact_icon">
                        <Phone className="icon" />
                    </span>
                    <span className="contact_info">
                        <p className="contactName">Phone</p>
                        <p className="contactValue">+91 8471003325</p>
                    </span>
                </div>

                {/* LOCATION  */}
                <div className="contact">
                    <span className="contact_icon">
                        <MapPin className="icon" />
                    </span>
                    <span className="contact_info">
                        <p className="contactName">Location</p>
                        <p className="contactValue">Gorakhpur, India</p>
                    </span>
                </div>

                <div className="links">
                    <a href="https://github.com/anup12043112"> <img src="https://ik.imagekit.io/anup2810/Portfolio/Tools/github.png?updatedAt=1790268365804" className="linkIcon" /> </a>
                    <a href="https://www.linkedin.com/in/anup0209/"> <img src="https://ik.imagekit.io/anup2810/Portfolio/linkedin.png?updatedAt=1790829361289" className="linkIcon" /> </a>
                    <a href="https://www.instagram.com/_mr.__stark/"> <img src="https://ik.imagekit.io/anup2810/Portfolio/instagram.png?updatedAt=1790829361301" className="linkIcon" /> </a>
                    <a href="mailto:anup13775@gmail.com"> <Mail className="linkIcon" /> </a>
                </div>

            </section>

            <form className="formSec fromDown_animation">
                <p className="header">Send Me a Message</p>
                <p className="body">I'll get back to you as soon as possible.</p>

                <div className="inputSet" style={{ marginTop: "2rem" }}>
                    <span className="inputBox">
                        <p className="label">Name</p>
                        <input type="text" name="name" id="name" className="input1" placeholder="Your Full Name" />
                    </span>
                    <span className="inputBox">
                        <p className="label">Email</p>
                        <input type="email" name="mail" id="mail" className="input1" placeholder="Your Active Email" />
                    </span>
                </div>

                <div className="inputSet">
                    <span className="inputBox2">
                        <p className="label">Subject</p>
                        <select name="subject" id="subject" className="input2">
                            <option value="" className="opt" selected disabled hidden>Select subject</option>
                            <option value="1" className="opt">Project Inquiry</option>
                            <option value="2" className="opt">Freelance Opportunity</option>
                            <option value="3" className="opt">Job Opportunity</option>
                            <option value="4" className="opt">Collaboration</option>
                            <option value="5" className="opt">Technical Question</option>
                            <option value="6" className="opt">Portfolio Feedback</option>
                            <option value="7" className="opt">General Inquiry</option>
                            <option value="8" className="opt">Other</option>
                        </select>
                    </span>
                </div>

                <div className="inputSet">
                    <span className="inputBox2">
                        <p className="label">Message</p>
                        <textarea name="mesage" id="msg" className="input2" rows={6} placeholder="Message"></textarea>
                    </span>
                </div>

                <button className="sendBTN">
                    Send Message
                    <Send className="sendIcon" />
                </button>

            </form>

        </main>
    )
}