import React, {useEffect, useState} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import fetchAllWho from "../../../../services/whoService";

const WhoToFollowList = () => {

    const [who, setWho] = useState([]);
    useEffect(() =>
        fetchAllWho()
            .then(who => setWho(who)),[]);

    return (
            <ul className="list-group">
                {/*{JSON.stringify(who)}*/}
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
    );
}
export default WhoToFollowList;

