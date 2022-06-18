import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/newsFeed-reduser";
import NewPosts from "./NewPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        newPostText: state.newsFeedPage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const NewPostsContainer = connect(mapStateToProps, mapDispatchToProps)(NewPosts);
export default NewPostsContainer;