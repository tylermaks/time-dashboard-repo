import React from "react"

import "./Assets/Styles/Tracker/Tracker.css"
import ellipsis from "./Assets/images/icon-ellipsis.svg"
import exercise from "./Assets/images/icon-exercise.svg"
import play from "./Assets/images/icon-play.svg"
import selfCare from "./Assets/images/icon-self-care.svg"
import social from "./Assets/images/icon-social.svg"
import study from "./Assets/images/icon-study.svg"
import work from "./Assets/images/icon-work.svg"

function Tracker(props) {

    const images = [work, play, study, exercise, social, selfCare]

    const convertTimeframe = props.timeframe === 'Daily' ? 'Yesterday' : props.timeframe === 'Weekly' ? 'Last week' : 'Last month';
        
    return(
        <div className={"tracker tracker--" + props.title.replace(/\s+/g, '')} >
            <img className="icon" src={images[props.id]} alt="Tracker Icon" />
            <div className="tracker-inner tracker-inner--activity">
                <div className="tracker-text tracker-text--top">
                    <h3>{props.title}</h3>
                    <img className="ellipsis" src={ellipsis} alt="More" />
                </div>
                <div className="tracker-text tracker-text--bottom">
                    <h2>{props.current}hrs</h2>
                    <span className="previous">{convertTimeframe} - {props.previous} Hours</span>
                </div>
            </div>
        </div>
    )
}

export default Tracker;