import React, {useEffect, useState} from "react";
import NavigationSidebar from "../NavigationSideBar";
import ProfileItem from "./ProfileItem";
import TweetList from "../TweetList";
import PostSummaryList from "../PostSummaryList";
import {fetchProfile} from "../../../../services/profileServiceA9";
import service from "../../Practice/Movies/service";

const ProfileScreen = () => {

    const [profile, setProfile] = useState({});
    useEffect(() =>
        fetchProfile()
            .then(profile => setProfile(profile)),[]);

    return(
        <div className="row mt-2">
            {/*{JSON.stringify(profile)}*/}
            <div className="col-2">
                <NavigationSidebar active= 'profile'/>
            </div>
            <div className="mb-2 col-10 col-lg-8 col-xl-7 col-xxl-6">
                <ProfileItem profile={profile}/>
                <TweetList/>
            </div>
            <div className="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-4">
                <PostSummaryList title="What's happening"/>
            </div>
        </div>
    );
};

export default ProfileScreen;