import React from "react";
import NavigationSidebar from "../NavigationSideBar";
import WhoToFollowList from "../WhoToFollowList";
import PostList from "../PostList";


const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active= 'home'/>
            </div>
            <div className="mb-2 col-10 col-lg-8 col-xl-7 col-xxl-6">
                <PostList/>
            </div>
            <div className="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
};

export default HomeScreen;