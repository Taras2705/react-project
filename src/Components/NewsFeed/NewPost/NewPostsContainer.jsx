import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/newsFeed-reduser";
import NewPosts from "./NewPosts";


const NewPostsContainer = (props) => {
let state=props.store.getState();
    let publishPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        let action=updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    return (
        <NewPosts addPost={publishPost} updateNewPostText={onPostChange} newPostText={state.newsFeedPage.newPostText}/>

    )
};
export default NewPostsContainer;