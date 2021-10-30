import React from "react";
import {Route} from "react-router-dom";
import NavigationSidebar from "./NavigationSideBar";
import WhoToFollowList from "./WhoToFollowList";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import who from "../../../reducers/who";
import {createStore} from "redux";
import {Provider} from "react-redux";
import HomeScreen from "../../a7/Build/HomeScreen/HomeScreen";

const store = createStore(who);

const Build = () => {
    return(
        // <div className="row mt-2">
        //     <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        //         <NavigationSidebar active="explore"/>
        //     </div>
        //     <div className="col-10 col-lg-8 col-xl-7 col-xxl-6"
        //          style={{"position": "relative"}}>
        //         <ExploreComponent/>
        //     </div>
        //     <div className="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-4">
        //         <WhoToFollowList/>
        //     </div>
        // </div>
        <Provider store={store}>
            <div>
                <Route path={["/", "/a7/twitter/home"]}
                       exact={true} component={HomeScreen}/>
                <Route path="/a7/twitter/explore"
                       exact={true} component={ExploreScreen}/>
            </div>
        </Provider>
    );
};

export default Build;


