import React from "react"

import profileImg from "./Assets/images/image-jeremy.png"
import "./Assets/Styles/Profile/Profile.css"

function Profile(props){

    const links = ["Daily", "Weekly", "Monthly"]

    return(
        <div className="tracker tracker--profile">
            <div className="tracker-inner tracker-inner--profile">
                <img className="profile-img" src={profileImg} alt="Profile" />
                <article className="profile-text">
                    <span>Report for</span>
                    <h2 className="name">Jeremy Robson</h2>
                </article>
            </div>
            <div className="link-container">
                {
                    links.map(item => {

                        const styles = props.timeframe === item ? {fontWeight:500, color:"#fff"} : null

                        return(
                            <span
                                id={item}
                                className="link"
                                onClick={props.handleClick}
                                style={styles}
                            >
                                {item}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Profile;