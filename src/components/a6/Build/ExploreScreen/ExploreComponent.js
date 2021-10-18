import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-10">
                    <i className="fa fa-search wd-search-icon"/>
                    <input className ="form-control wd-input-field wd-rounded-corners-all-around wd-search-bar"  type="search"
                           placeholder="Search Twitter"/>
                </div>
                <div className="col-2">
                    <a href="../../twitter/explore/explore-settings.html">
                        <i className ="fas fa-cog fa-2x wd-padded-right wd-padded-top"/>
                    </a>
                </div>
            </div>
            <ul className="nav mt-2 mb-2 nav-tabs">
                <li className = "nav-link nav-item active">
                        <a className = "wd-for-you" href="../../twitter/explore/foryou.html">
                            <span className=" wd-fg-white">
                                For you
                            </span>
                        </a>
                    </li>
                    <li className = "nav-link nav-item">
                        <a className = "wd-the-other" href="../../twitter/explore/trending.html">
                            <span className="wd-fg-white">
                                Trending
                            </span>
                        </a>
                    </li>
                    <li className = "nav-link nav-item">
                        <a className = "wd-the-other" href="../../twitter/explore/news.html">
                            <span className="wd-fg-white">
                                News
                            </span>
                        </a>
                    </li>
                    <li className = "nav-link nav-item d-none d-sm-block">
                        <a className = "wd-the-other" href="../../twitter/explore/sports.html">
                            <span className="wd-fg-white">
                                Sports
                            </span>
                        </a>
                    </li>
                    <li className = "nav-link nav-item d-none d-md-block">
                        <a className = "wd-the-other" href="../../twitter/explore/entertainment.html">
                            <span className="wd-fg-white">
                                Entertainment
                            </span>
                        </a>
                    </li>
            </ul>
            <ul className="list-group mb-2">
                <li className = "list-group-item ps-0 pe-0 pt-0 pb-0">
                        <div style={{"position": "relative"}}>
                            <img src={"../images/starship.jpeg"} width="100%"/>
                            <div className="wd-starship">
                                <b>SpaceX's Starship</b>
                            </div>
                        </div>
                </li>
            
           <PostSummaryList/>
           </ul>
        </>
    );
}
export default ExploreComponent;
