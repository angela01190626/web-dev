import React from "react";
import NavigationSidebar from "./NavigationSideBar";
import WhoToFollowList from "./WhoToFollowList";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import {Link, Route} from "react-router-dom";
import HomeScreen from "../../a6/Build/HomeScreen/HomeScreen";

const BuildA6 = () => {
    return(
        <>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/">
                Practice
            </Link>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-lg-8 col-xl-7 col-xxl-6"
                     style={{"position": "relative"}}>
                    <ExploreComponent/>
                </div>
                <div className="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </>
    )
};

export default BuildA6;


