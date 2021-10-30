import PostItem from "./PostItem.js";
import bookmark from "./bookmark.json";
import React from "react";

const PostList = () => {
    return (
        <ul className="list-group">
            {
            bookmark.map(bookmark => {
                return (
                    <PostItem bookmark = {bookmark}/>
                );
        })
    }    
        </ul>
);
}
export default PostList;
