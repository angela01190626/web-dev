import React from "react";

const WhoToFollowListItem =(
    {
        who = {
            avatarIcon: '../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
        return(
            <li className="list-group-item">
                <div className="row" style={{"position": "relative"}}>
                    <div className="col-lg-2 col-xl-2 col-xxl-2">
                        <img src = {who.avatarIcon} className="wd-avatar-image"/>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-xxl-7 wd-no-wrap wd-z-index">
                        {who.userName} <i className="fa fa-check-circle"/><br/>
                        <span className ="wd-fg-posts"> {who.handle}</span>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-xxl-3">
                        <button className = "btn btn-primary rounded-pill">
                            Follow
                    </button>
                    </div>
                </div>
            </li>
        );
}

export default WhoToFollowListItem;
