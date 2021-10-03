import React from "react";

export default function workCard(props) {
    return (
                <button className="workcards" onClick={() => {window.location = props.appLink}} style={{backgroundImage: `url("${props.imgLink}")`}}>
                    < div className="workcard-description" >
                        <h4>{props.title}</h4>
                        <p>{props.tech}</p>
                        <p className="workcards-links">
                            <a href={props.repoLink}>GitHub Repo</a>
                        </p>
                    </div >
                </button >
    )
}