import React from "react";

const PostSummaryItem = (
    {post =
        { topic: 'Web Development',
        userName: 'ReactJS',
        time: '2h',
        title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
        image: '/images/react-blue.png'}
        }) => {
    return(
        <div className="row pt-2">
            <div className="col-9">
                <span className="wd-fg-posts">{post.topic}</span><br/>
                <b>{post.userName}</b> <i className="fa fa-check-circle"/><span className="wd-fg-posts"> - {post.time}</span><br/>
                <b>{post.title}</b>
            </div>
            <div className="col-3">
                <img src= {post.image} className="wd-all-rounded-image wd-float-right" alt=""/>
            </div>
        </div>
    )
}
export default PostSummaryItem;