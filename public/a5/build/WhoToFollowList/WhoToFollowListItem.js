const WhoToFollowListItem =(who) => {
    return(`
        <div class="row" style="position: relative">
            <div class="col-lg-2 col-xl-2 col-xxl-2">
                <img src = ${who.avatarIcon} class="wd-avatar-image">
            </div>
            <div class="col-lg-6 col-xl-6 col-xxl-7 wd-no-wrap" style="z-index: 10">
                ${who.userName} <i class="fa fa-check-circle"></i><br>
                <span class ="wd-fg-posts"> ${who.handle}</span>
            </div>
            <div class="col-lg-4 col-xl-4 col-xxl-3">
                <button class = "btn btn-primary rounded-pill">
                    Follow
            </button>
            </div>
        </div>
    `);
}

export default WhoToFollowListItem;
