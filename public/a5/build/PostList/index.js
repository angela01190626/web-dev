import PostItem from "./PostItem.js";
import bookmark from "./bookmark.js";

const PostList = () => {
    return (`
        <ul class="list-group">
            <!-- continue here -->
                ${
            bookmark.map(bookmark => {
            return "<li class=\"list-group-item\">" +(PostItem(bookmark)) + "</li>";
        }).join('')
    }    
        </ul>
`);
}
export default PostList;
