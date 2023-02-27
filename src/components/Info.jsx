import React from "react"

export default function Info() {
    return (
        <section className="infoContainer">
            <div className="imgContainer">
                <img src="me.jpg" />
            </div>
            <div className="headings">
                <h1>Noman Bin Basheer</h1>
                <h4>Front End Developer</h4>
                <span><a>nomanbinbasheer.netlify.app</a></span>
            </div>
            <section className="socials">
                <div className="email"><i class="fa-solid fa-envelope"></i></div>
                <div className="linkedin"><i class="fa-solid fa-user"></i></div>
            </section>
        </section>
    )
}

