import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                <div class="col-10">
                    <i class="fa fa-search wd-search-icon"></i>
                    <input class ="form-control wd-input-field wd-rounded-corners-all-around"  type="search"
                           placeholder="Search Twitter" style="padding-left: 30px;border-radius: 50px">
                </div>
                <div class="col-2">
                    <a href="explore-settings.html">
                        <i class ="fas fa-cog fa-2x wd-padded-right wd-padded-top"></i>
                    </a>
                </div>
            </div>
            <ul class="nav mt-2 mb-2 nav-tabs">
                      <!-- tabs -->   
                <li class = "nav-link nav-item active">
                        <a class = "wd-for-you" href="../../twitter/explore/foryou.html">
                            <span class=" wd-fg-white">
                                For you
                            </span>
                        </a>
                    </li>
                    <li class = "nav-link nav-item">
                        <a class = "wd-the-other" href="../../twitter/explore/trending.html">
                            <span class="wd-fg-white">
                                Trending
                            </span>
                        </a>
                    </li>
                    <li class = "nav-link nav-item">
                        <a class = "wd-the-other" href="../../twitter/explore/news.html">
                            <span class="wd-fg-white">
                                News
                            </span>
                        </a>
                    </li>
                    <li class = "nav-link nav-item d-none d-sm-block">
                        <a class = "wd-the-other" href="../../twitter/explore/sports.html">
                            <span class="wd-fg-white">
                                Sports
                            </span>
                        </a>
                    </li>
                    <li class = "nav-link nav-item d-none d-md-block">
                        <a class = "wd-the-other" href="../../twitter/explore/entertainment.html">
                            <span class="wd-fg-white">
                                Entertainment
                            </span>
                        </a>
                    </li>
            </ul>
           <!-- image with overlaid text -->
            <ul class="list-group mb-2">
                <li class = "list-group-item ps-0 pe-0 pt-0 pb-0">
                        <div style="position: relative">
                            <img src="../images/starship.jpeg" width="100%"/>
                            <div style="position: absolute; bottom: 8px; left: 8px; color: white; font-size: 30px">
                                <b>SpaceX's Starship</b>
                            </div>
                        </div>
                </li>
            
           ${PostSummaryList()}
           </ul>
    `);
}
export default ExploreComponent;
