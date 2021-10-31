import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
// import who from "../../../../data/who.json";
import {Provider, useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => who.state);
    return (
        <Provider store={who}>
            <ul className="list-group">
                <li className="list-group-item">
                        Who to follow
                </li>
                {
                    who.map(who => {
                        return(
                            <WhoToFollowListItem who = {who}/>
                        );
                    })
                }    
            </ul>
        </Provider>
    );
}
export default WhoToFollowList;

