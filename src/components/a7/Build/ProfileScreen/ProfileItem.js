import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const ProfileItem = (
    {profile =
        {
            name: 'Yangjiawen Xu',	handle: 'Catherina',
            profilePicture: '/images/selfie.jpg', bannerPicture: '/images/nature1.jpeg',
            bio: 'I am a MCSC student at the Boston campus.',
            location: 'Boston, MA',	dateOfBirth: '10/26/1995',	dateJoined: '9/2021',
            followingCount: '100',followersCount: '10'
        }
    }) => {

    return(
        <>
            {/*{JSON.stringify(profile)}*/}
            <div className="row pt-2">
                <div className="col-1">
                    <a href="#"><i className="fas fa-long-arrow-alt-left"/></a>
                </div>
                <div className="col-11">
                    <h6>{profile.name}</h6>
                    <span className="wd-fg-gray">5000 Tweets</span>
                </div>
                <div style={{"position": "relative",paddingBottom:'320px'}}>
                    <img src={profile.bannerPicture} className="wd-banner-image" alt=""/>
                    <img src={profile.profilePicture} className="wd-profile-image" alt=""/>
                    <Link to ="/a7/twitter/editProfile"
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