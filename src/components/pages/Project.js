import React from "react";
import WorkCard from "./WorkCard";

const workData =
    [
        {
            "title": "Life Happens",
            "tech": "JavaScript / Bulma / Third-party APIs",
            "imgLink": "../../images/screenshots/life_happens.png",
            "appLink": "https://ywkuo227.github.io/life-happens/",
            "repoLink": "https://github.com/ywkuo227/life-happens"
        },
        {
            "title": "Weather Dashboard",
            "tech": "JavaScript / Bootstrap / OpenWeather API",
            "imgLink": "../../images/screenshots/weather.jpg",
            "appLink": "https://ywkuo227.github.io/weather-dashboard/",
            "repoLink": "https://github.com/ywkuo227/weather-dashboard"
        },
        {
            "title": "Work Day Scheduler",
            "tech": "JavaScript / jQuery / Moment.js",
            "imgLink": "../../images/screenshots/scheduler.jpeg",
            "appLink": "https://ywkuo227.github.io/work-day-scheduler/",
            "repoLink": "https://github.com/ywkuo227/work-day-scheduler"
        },
        {
            "title": "Facility Management",
            "tech": "Node.js / Express.js / MySQL / MVC / Handlebars",
            "imgLink": "../../images/screenshots/fac_mgmt.png",
            "appLink": "https://dn-fac-mgmt.herokuapp.com/",
            "repoLink": "https://github.com/DN-Vanguard/Facility_Management"
        },
        {
            "title": "The Tech Blog",
            "tech": "Node.js / Express.js / MySQL / MVC / Handlebars",
            "imgLink": "../../images/screenshots/tech_blog.jpeg",
            "appLink": "https://ywk-tech-blog.herokuapp.com/",
            "repoLink": "https://github.com/ywkuo227/tech-blog"
        },
        {
            "title": "Note Taker",
            "tech": "Node.js / Express.js / Heroku",
            "imgLink": "../../images/screenshots/note_taker.jpeg",
            "appLink": "https://ywk-note-taker.herokuapp.com/",
            "repoLink": "https://github.com/ywkuo227/note-taker"
        },
        // {
        //     "title": "E-Commerce Backend",
        //     "tech": "Express.js / MySQL / Sequelize",
        //     "imgLink": "../../images/screenshots/ecommerce.png",
        //     "appLink": "https://drive.google.com/file/d/15QpNpx7fV19kup6EGUaaZfg9RPPz7OoC/view?usp=sharing",
        //     "repoLink": "https://github.com/ywkuo227/e-commerce-backend"
        // }
    ];

export default function Project() {
    return (
        <div>
            <main>
                <section id="work">
                    <h3>Work</h3>
                    <article class="work">
                        {workData.map((work) => (
                            <WorkCard title={work.title} tech={work.tech} imgLink={work.imgLink} appLink={work.appLink} repoLink={work.repoLink} />
                        ))}
                    </article>
                </section>
            </main>
        </div>
    )
}