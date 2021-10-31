import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import post from "./post.json"
import {useSelector} from "react-redux";

const selectAllPosts = (state) => state.tweets.tweets;

const PostSummaryList = ({title}) => {
    const posts = useSelector(selectAllPosts);

    return (
            <>
                {
                    title &&
                    <div className="list-group-item">
                        <h5 className="fw-bolder">{title}</h5>
                    </div>
                }
                {
                    posts.map (post => {
                        return(
                            <PostSummaryItem post = {post}/>
                        );
                    })
                }
            </>

    );
}
export default PostSummaryList;