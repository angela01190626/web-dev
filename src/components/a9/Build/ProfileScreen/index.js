import React, {useEffect} from "react";
import NavigationSidebar from "../NavigationSideBar";
import ProfileItem from "./ProfileItem";
import {useDispatch, useSelector} from "react-redux";
import TweetList from "../TweetList";
import PostSummaryList from "../PostSummaryList";
import {fetchProfile} from "../../../../services/profileService";

const selectProfile = (state) => state.profile.profile;

const ProfileScreen = () => {
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();
    useEffect(() =>fetchProfile(dispatch),[])

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