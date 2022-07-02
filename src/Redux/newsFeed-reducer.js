const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    posts: [
        {
            id: 1,
            postImg: 'https://themified.com/friend-finder/images/post-images/1.jpg',
            personIco: 'https://themified.com/friend-finder/images/users/user-5.jpg',
            name: 'Alexis Clark',
            like: '13',
            dislike: '0',
            infoStatus: 'Published a photo about 3 mins ago',
            message: 'Lorem ipsum dolor sit amet,\n' +
                '                      consectetur adipiscing elit, sed do eiusmod tempor\n' +
                '                incididunt ut labore et dolore magna aliqua.\n' +
                '                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
                '                consequat.\n' +
                '                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
                '                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
                '                laborum.'
        },
        {
            id: 2,
            postImg: 'https://themified.com/friend-finder/images/post-images/2.jpg',
            personIco: 'https://themified.com/friend-finder/images/users/user-3.jpg',
            name: 'Sophia Lee',
            like: '75',
            dislike: '8',
            infoStatus: 'Updated her status about 33 mins ago',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                '                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
                '                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }


    ],
    newPostText: '',
}

const newsFeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            let newPost =
                {
                    postImg: 'https://themified.com/friend-finder/images/post-images/8.jpg',
                    id: 3,
                    personIco: 'https://themified.com/friend-finder/images/users/user-1.jpg',
                    name: 'Sarah Cruiz',
                    like: '0',
                    dislike: '0',
                    infoStatus: 'Published a photo about 1 mins  ago',
                    message: state.newPostText

                };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],

            };

        case updateNewPostText:
            return {
                ...state,
                newPostText: action.textPost
            }
        default:
            return state

    }


}
export const addPostActionCreator = () => ({type: addPost});
export const updateNewPostTextActionCreator = (text) => ({type: updateNewPostText, textPost: text});
export default newsFeedReducer;