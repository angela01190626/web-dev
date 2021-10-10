import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";
//import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar('home')}
            </div>
            <div class="mb-2 col-10 col-lg-8 col-xl-7 col-xxl-6">
                ${PostList()}
            </div>
            <div class="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-4">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);
