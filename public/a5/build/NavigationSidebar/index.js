const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
            
                <a class="list-group-item" href = "../../twitter/home.html">
                        <i class = "fa fa-home">
                            <span class="d-none d-xl-inline-block">
                                Home
                            </span>
                        </i>
                    </a>
                    <a class="list-group-item active" href = "../ExploreScreen/explore.html">
                        <i class = "fa fa-hashtag">
                            <span class="d-none d-xl-inline-block">
                                Explore
                            </span>
                        </i>
                    </a>
                    <a class="list-group-item" href = "../../twitter/notifications.html">
                        <i class = "fa fa-bell">
                            <span class="d-none d-xl-inline-block">
                                Notifications
                            </span>
                        </i>
                    </a>
                    <a class="list-group-item" href = "../../twitter/messages.html">
                        <i class = "fa fa-envelope">
                            <span class="d-none d-xl-inline-block">
                                Messages
                            </span>
                        </i>
                    </a>
                    <a class="list-group-item" href = "../../twitter/bookmarks/bookmarks.html">
                        <i class = "fa fa-bookmark">
                            <span class="d-none d-xl-inline-block">
                                Bookmarks
                            </span>
                        </i>
                    </a>
                    <a class="list-group-item" href = "../../twitter/lists.html">
                        <i class = "fa fa-list">
                            <span class="d-none d-xl-inline-block">
                                Lists
                            </span>
                        </i>
                    </a>
                    <a class="list-group-item" href = "../../twitter/profile.html">
                        <i class = "fa fa-user">
                            <span class="d-none d-xl-inline-block">
                                Profile
                            </span>
                        </i>
                    </a>
                    <a class="list-group-item ps-1" href = "../../twitter/more.html">
                            <span class="fa-stack fa-1x pe-0 pe-0" >
                                <i class="fas fa-circle fa-stack-1x"></i>
                                <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                                <span class="d-none d-xl-inline-block" style="padding-left: 31px">
                                More
                                </span>
                            </span>

                    </a>
            </div>
            <div class="d-grid mt-2">
                <a href="../../twitter/tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
