import React from "react"

import profileImg from "./Assets/images/image-jeremy.png"

function Profile(props){

    // const fontValue = props.timeframe === this.value ? 500 : null

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
                <span onClick={props.onClick} style={{fontWeight: 500}} className="link">Daily</span>
                <span className="link">Weekly</span>
                <span className="link">Monthly</span>
            </div>
        </div>
    )
}

export default Profile;