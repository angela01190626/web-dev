import React from "react";

const PostItem =({bookmark =
    { avatarIcon: "../images/avatar1.jpeg",
        userName: "Elon Musk", handle: "elonmusk", time:"23h",
        userContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "../images/content1.jpeg",
        title:"The standard Lorem Ipsum passage, used since the 1500s",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        comments:"4.2k",repost:"3.5k",likes:"37.8k", link: "https://www.netlify.com/", linkAbbr:"netlify.com"}
    }) => {
    return(
        <div className = "row">
            <div className = "col-1 pt-3" >
                <img src = {bookmark.avatarIcon} className = "wd-avatar" alt=""/>
            </div>
            <div className="col-11">
                <div className = "wd-post-name">
                    {bookmark.userName}
                    <i className ="fa fa-check-circle"/>
                    <span className ="wd-handle-content"> @{bookmark.handle} - {bookmark.time}</span>
                </div>
                <div className = "wd-post-content">
                    {bookmark.userContent1}<a href ="/#" className="wd-link">{bookmark.userhandle}</a>{bookmark.userContent2}
                    <a href = {bookmark.userlink} className= "wd-link">{bookmark.userlinkAbbr}</a>
                </div>
                
                <div className = "wd-flex wd-padded-left">
                    
                    <img className = {`${bookmark.link ==='' && bookmark.title === '' && bookmark.content === '' ? 'wd-content-image1' :'wd-content-image'}`}
                    src = {bookmark.img} height = "300px" width = "700px" alt=""/>
                
                </div>
                <div className = {`${bookmark.link ==='' && bookmark.title === '' && bookmark.content === '' ? 'none' :'wd-padded-left'}`}>
                    <div className= {`${bookmark.link ==='' && bookmark.title === '' && bookmark.content === '' ? 'none' :'wd-border-content'}`}>
                        <div className = {`${bookmark.link ==='' && bookmark.title === '' && bookmark.content === '' ? 'none' : 'wd-padding-title'}`} style = {{"color": "white"}}>
                        <b>
                            {bookmark.title}
                        </b>
                        </div>
                        <div className = {`${bookmark.link ==='' && bookmark.title === '' && bookmark.content === '' ? 'none' :'wd-padding-around wd-fg-color'}`}>
                            {bookmark.content}
                            <br/>
                            <a href = {bookmark.link}><i className = {`${bookmark.linkAbbr ==='' ? 'none' :'fa fa-link wd-fg-color'}`}>{bookmark.linkAbbr}</i></a>
                        </div>

                    </div>
                </div>

                <div className = "wd-padding wd-padded-left">
                    <a href="/#"><i className="wd-icon fas fa-comment"/></a><span className = "wd-icon-number">{bookmark.comments}</span>
                    <a href="/#"><i className="wd-icon fa fa-retweet"/></a><span className = "wd-icon-number">{bookmark.repost}</span>
                    <a href="/#"><i className="wd-icon fa fa-heart"/></a><span className = "wd-icon-number">{bookmark.likes}</span>
                    <a href="/#"><i className="wd-icon fas fa-external-link-alt"/></a>
                </div>
            </div>
        </div>
    );
}

export default PostItem;