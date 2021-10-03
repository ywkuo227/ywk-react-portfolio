import React from "react";
import fileResume from "../../resources/resume.pdf"

export default function Resume() {
    return (
        <div>
            <main>
                <section id="resume">
                    <h3>Resume</h3>
                    <div>
                        <a href={fileResume}>Click Here To Download My Resume</a>
                        <p>
                            Front-end Proficiencies
                        </p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Responsive Design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>

                        <br />
                        <p>
                            Back-end Proficiencies
                        </p>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}