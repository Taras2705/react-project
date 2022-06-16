const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case addPost:
            let newPost =
                {
                    postImg: 'https://themified.com/friend-finder/images/post-images/1.jpg',
                    id: 3,
                    personIco: 'https://themified.com/friend-finder/images/users/user-1.jpg',
                    name: 'Sarah Cruiz',
                    like: '0',
                    dislike: '0',
                    infoStatus: 'Published a photo about 1 mins  ago',
                    message: state.newPostText

                };
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case updateNewPostText:
            state.newPostText = action.textPost;
            return state
        default:
            return state

    }


}
export const addPostActionCreator = () => ({type: addPost});
export const updateNewPostTextActionCreator = (text) => ({type: updateNewPostText, textPost: text});
export default profileReducer;