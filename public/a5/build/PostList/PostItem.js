const PostItem =(bookmark) => {
    return(`

        <div class = "row">
            <div class = "col-1 pt-3" >
                <img src = ${bookmark.avatarIcon} class = "wd-avatar"/>
            </div>
            <div class="col-11">
                <div class = "wd-post-name">
                    ${bookmark.userName} 
                    <i class="fa fa-check-circle"></i>
                    <span class ="wd-handle-content"> @${bookmark.handle} - ${bookmark.time}</span>
                </div>
                <div class = "wd-post-content">
                    ${bookmark.userContent1}<a href ="#" class="wd-link">${bookmark.userhandle}</a>${bookmark.userContent2}
                    <a href = ${bookmark.userlink} class = "wd-link">${bookmark.userlinkAbbr}</a>
                </div>
                
                <div class = "wd-flex wd-padded-left">
                    
                    <img class = "${bookmark.link ==='' && bookmark.title === '' && bookmark.content === '' ? 'wd-content-image1' :'wd-content-image'}" 
                    src = ${bookmark.img} height = "300px" width = "700px"/>
                
                </div>
                <div class = "${bookmark.link ==='' && bookmark.title === '' && bookmark.content === '' ? 'none' :'wd-padded-left'} " >
                    <div class="${bookmark.link ==='' && bookmark.title === '' && bookmark.content === '' ? 'none' :'wd-border-content'}">
                        <div class = "${bookmark.link ==='' && bookmark.title === '' && bookmark.content === '' ? 'none' : 'wd-padding-title'}" style = "color: white">
                        <b>
                            ${bookmark.title}
                        </b>
                        </div>
                        <div class = "${bookmark.link ==='' && bookmark.title === '' && bookmark.content === '' ? 'none' :'wd-padding-around wd-fg-color'}">
                            ${bookmark.content}
                            <br>
                            <a href = ${bookmark.link}><i class = " ${bookmark.linkAbbr ==='' ? 'none' :'fa fa-link wd-fg-color'} ">${bookmark.linkAbbr}</i></a>
                        </div>

                    </div>
                </div>

                <div class = "wd-padding wd-padded-left">
                    <a href="#"><i class="wd-icon fas fa-comment"></i></a><span class = "wd-icon-number">${bookmark.comments}</span>
                    <a href="#"><i class="wd-icon fa fa-retweet"></i></a><span class = "wd-icon-number">${bookmark.repost}</span>
                    <a href="#"><i class="wd-icon fa fa-heart"></i></a><span class = "wd-icon-number">${bookmark.likes}</span>
                    <a href="#"><i class="wd-icon fas fa-external-link-alt"></i></i></a>
                </div>
            </div>
        </div>
    `);
}

export default PostItem;