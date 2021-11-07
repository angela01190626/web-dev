import React from "react";
import {useDispatch,useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";

const selectAllTweets = (state) => state.tweets.tweets;

const TweetList = () => {

    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    // useEffect(() => fetchAllTweets(dispatch), []);


    return(
        <ul className="list-group">
            {
                tweets.map(tweet =>
                    <TweetListItem tweet={tweet}/>
                )
            }
        </ul>
    )
};

export default TweetList;
