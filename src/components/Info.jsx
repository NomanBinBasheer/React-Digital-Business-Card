import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
    return (
        <section className="infoContainer">
            <div className="imgContainer">
                <img src="me3.png" />
            </div>
            <div className="headings">
                <h1>Noman Bin Basheer</h1>
                <h4>Front End Developer</h4>
                <span><a href="https://nomanbinbasheer.netlify.app/" target="blank">nomanbinbasheer.netlify.app</a></span>
            </div>
            <section className="socials">
                <a className="email" href="#"><FontAwesomeIcon icon={faEnvelope} className = "icon"/> <span>Email</span></a>
                <a className="linkedin" href="https://www.linkedin.com/in/nomanbinbasheer/" target="blank"><FontAwesomeIcon icon={faLinkedin} className = "icon"/> <span>LinkedIn</span></a>  
            </section>
        </section>
    )
}

