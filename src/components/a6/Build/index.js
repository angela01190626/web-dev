import React from "react";
import {Route,Link} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen";

const BuildA6 = () => {
    return(
        <>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/">
                Practice
            </Link>
            <div>
                <Route path={["/", "/a6/twitter/home"]} exact={true} component={HomeScreen}/>
                <Route path="/a6/twitter/explore" exact={true} component={ExploreScreen}/>

            </div>
        </>
    )
};

export default BuildA6;


