import React from "react";
import imgMe from "../../images/me.jpg"

export default function AboutMe() {
    return (
        <div>
            <div className="hero">
                <h2>Hello there!</h2>
            </div>

            <main>
                <section id="about-me">
                    <h3><span>About</span><span> Me</span></h3>
                    <article>
                        <p className="aboutme">
                            <img src={imgMe} alt="myself" />
                            Full-stack Web Developer with Business Administration degree (concentration in Management
                            Information Systems and Operations Management) from Western Washington University.Have experiences
                            in C# and ASP.NET and Rapid Application Development.Recently received a certificate in full stack
                            web development from Coding Boot Camp from University of Washington.Known to come up with creative
                            ways of solving critical problems, I am thrilled to apply newly developed skill in HTML, CSS,
                            JavaScript, and responsive web design into solving challenges, empowering everyone to achieve more.
                        </p>
                    </article>
                </section>
            </main>
        </div>
    )
}