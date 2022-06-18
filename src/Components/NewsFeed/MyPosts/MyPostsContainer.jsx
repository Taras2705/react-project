import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return{
        posts:state.newsFeedPage.posts
    }
}
const MyPostsContainer=connect(mapStateToProps)(MyPosts)
export default MyPostsContainer;