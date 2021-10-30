import React from "react";
import {Link} from "react-router-dom";

const Navigation = (
    {
        active = 'explore'
    }) => {
    return(
        <>
            <div className="list-group">
                <Link to="/a6"
                      className="list-group-item" href="#">
                    <i className="fab fa-twitter"/>
                </Link>

                <Link to="/a6/twitter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`} href = "../ExploreScreen/home.html" id = "home">
                    <i className = "fa fa-home">
                            <span className="d-none d-xl-inline-block">
                                Home
                            </span>
                    </i>
                </Link>
                <Link to="/a6/twitter/explore" className= {`list-group-item ${active === 'explore' ? 'active' : ''}`} href = "../ExploreScreen/explore.html" id = "explore">
                        <i className = "fa fa-hashtag">
                            <span className ="d-none d-xl-inline-block">
                                Explore
                            </span>
                        </i>
                </Link>

                    <a className= {`list-group-item ${active === 'notifications' ? 'active' : ''}`} href = "../../twitter/messages.html" id = "notifications">
                        <i className = "fa fa-bell">
                            <span className="d-none d-xl-inline-block">
                                Notifications
                            </span>
                        </i>
                    </a>
                    <a className= {`list-group-item ${active === 'messages' ? 'active' : ''}`} href = "../../twitter/messages.html" id = 'messages'>
                        <i className = "fa fa-envelope">
                            <span className ="d-none d-xl-inline-block">
                                Messages
                            </span>
                        </i>
                    </a>
                    <a className= {`list-group-item ${active === 'bookmarks' ? 'active' : ''}`} href = "../../twitter/bookmarks/bookmarks.html" id = 'bookmarks'>
                        <i className = "fa fa-bookmark">
                            <span className="d-none d-xl-inline-block">
                                Bookmarks
                            </span>
                        </i>
                    </a>
                    <a className= {`list-group-item ${active === 'lists' ? 'active' : ''}`} href = "../../twitter/lists.html" id = 'lists'>
                        <i className = "fa fa-list">
                            <span className ="d-none d-xl-inline-block">
                                Lists
                            </span>
                        </i>
                    </a>
                    <a className = {`list-group-item ${active === 'profile' ? 'active' : ''}`} href = "../../twitter/profile.html" id = 'profile'>
                        <i className = "fa fa-user">
                            <span className="d-none d-xl-inline-block">
                                Profile
                            </span>
                        </i>
                    </a>
                    <a className = {`list-group-item ps-1 ${active === 'more' ? 'active' : ''}`} href = "../../twitter/more.html" id = 'more'>
                        <span className="fa-stack fa-1x pe-0" >
                            <i className="fas fa-circle fa-stack-1x"/>
                            <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"/>
                            <span className="d-none d-xl-inline-block" style={{paddingLeft: "31px"}}>
                                More
                            </span>
                        </span>
                    </a>
            </div>
            <div className="d-grid mt-2">
                <a href="../../twitter/tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );

}
export default Navigation;