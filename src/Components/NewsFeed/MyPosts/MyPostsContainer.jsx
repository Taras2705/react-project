import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state=props.store.getState();

    return (
        <MyPosts posts={state.newsFeedPage.posts} />
    )
};
export default MyPostsContainer;