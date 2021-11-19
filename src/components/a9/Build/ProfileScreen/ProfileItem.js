import React from "react";
import {Link} from "react-router-dom";
// import {findProfileById} from "../../../../services/profileService";


const ProfileItem = ({profile}) => {

    return(
        <>
            {/*{JSON.stringify(profile[0])}*/}
            <div className="row pt-2">
                <div className="col-1">
                    <a href="/#"><i className="fas fa-long-arrow-alt-left wd-icon-color"/></a>
                </div>
                <div className="col-11">
                    <h6>{profile.name}</h6>
                    <span className="wd-fg-gray">5000 Tweets</span>
                </div>
                <div style={{"position": "relative",paddingBottom:'320px'}}>
                    <img src={profile.bannerPicture} className="wd-banner-image" alt=""/>
                    <img src={profile.profilePicture} className="wd-profile-image" alt=""/>
                    <Link to ="/a9/twitter/editProfile"
                          className="btn btn-primary wd-edit-button">
                        Edit profile
                    </Link>
                </div>

                <div className="mb-2">
                    <h6>{profile.name}</h6>
                    <span className="wd-fg-gray">@{profile.handle}</span>
                    <br/>
                    <span className="wd-fg-white">{profile.bio}</span><br/>
                    <span className="wd-fg-gray"><i className="fas fa-map-marker-alt"/> {profile.location}</span>
                    <span className="wd-fg-gray" style={{paddingLeft: "10px"}}> <i className="fas fa-birthday-cake"/> Born {profile.dateOfBirth}</span>
                    <span className="wd-fg-gray" style={{paddingLeft: "10px"}}> <i className="fas fa-calendar-alt"/> Joined {profile.dateJoined}</span><br/>
                    <span className="wd-fg-white"><b>{profile.followingCount}</b></span>
                    <span className="wd-fg-gray"> Following</span>
                    <span className="wd-fg-white" style={{paddingLeft: "15px"}}><b> {profile.followersCount}</b></span>
                    <span className="wd-fg-gray"> Followers</span>
                </div>
            </div>
        </>
    )
}
export default ProfileItem;