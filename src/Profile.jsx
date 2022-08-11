import React from "react"

import profileImg from "./Assets/images/image-jeremy.png"

function Profile(){
    return(
        <div className="tracker tracker--profile">
            <div className="tracker-inner tracker-inner--profile">
                <img className="profile-img" src={profileImg} alt="Profile" />
            </div>
        </div>
    )
}

export default Profile;