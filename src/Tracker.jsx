import React from "react"

import ellipsis from "./Assets/images/icon-ellipsis.svg"
import exercise from "./Assets/images/icon-exercise.svg"
import play from "./Assets/images/icon-play.svg"
import selfCare from "./Assets/images/icon-self-care.svg"
import social from "./Assets/images/icon-social.svg"
import study from "./Assets/images/icon-study.svg"
import work from "./Assets/images/icon-work.svg"

function Tracker(props) {

    const images = [work, play, study, exercise, social, selfCare]

    return(
        <div className={"tracker tracker--" + props.title.replace(/\s+/g, '')} >
            <img className="icon" src={images[props.id]} alt="Tracker Icon" />
            <div className="tracker-inner">
                <div>
                    <h3>{props.title}</h3>
                    <h2>{props.current}hrs</h2>
                </div>
                <div className="history">
                    <img src={ellipsis} alt="More" />
                    <span>Last week - {props.previous} Hours</span>
                </div>
            </div>
        </div>
    )
}

export default Tracker;