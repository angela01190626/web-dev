import React from "react";
import NavigationSidebar from "../NavigationSideBar";
//import {useSelector} from "react-redux";
import TweetList from "../TweetList";
import PostSummaryList from "../PostSummaryList";
import EditProfile from "./EditProfile";

//const selectProfile = (state) => state.profile.profile;

const EditProfileScreen = () => {
    // const profile = useSelector(selectProfile);

    return(
        <div className="row mt-2">
            <div className="col-2">
                <NavigationSidebar active= 'profile'/>
            </div>
            <div className="mb-2 col-10 col-lg-8 col-xl-7 col-xxl-6">
                <EditProfile/>
                <TweetList/>
            </div>
            <div className="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-4">
                <PostSummaryList title="What's happening"/>
            </div>
        </div>
    );
};

export default EditProfileScreen;