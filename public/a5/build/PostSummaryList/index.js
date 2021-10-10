import post from "./post.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
        ${
            post.map(post => {
                return "<li class=\"list-group-item\">" +(PostSummaryItem(post)) + "</li>";
            }).join('')
        }    
        
    `);
}
export default PostSummaryList;