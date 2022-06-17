import newsFeedReducer from "./newsFeed-reduser";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebur-reducer";

let store = {
    _state: {
        newsFeedPage: {
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
        },

        messagesPage: {
            dialogs: [
                {
                    id: 1, userImg: 'https://themified.com/friend-finder/images/users/user-2.jpg',
                    userName: 'Linda Lohan', userMessage: 'Hi there,how are you?'
                },
                {
                    id: 2, userImg: 'https://themified.com/friend-finder/images/users/user-10.jpg',
                    userName: 'Julia Cox',
                    userMessage: 'see you soon'
                },
                {
                    id: 3, userImg: 'https://themified.com/friend-finder/images/users/user-3.jpg',
                    userName: 'Sophia Lee',
                    userMessage: 'okay fine.thank you'
                },
                {
                    id: 4, userImg: 'https://themified.com/friend-finder/images/users/user-4.jpg',
                    userName: 'John Doe',
                    userMessage: 'Hi there,how are you?'
                },
                {
                    id: 5, userImg: 'https://themified.com/friend-finder/images/users/user-9.jpg',
                    userName: 'Anna Young',
                    userMessage: 'I gotta go'
                }

            ],
            messages: [
                {
                    id: 1, userImg: 'https://themified.com/friend-finder/images/users/user-2.jpg',
                    userName: 'Linda Lohan',
                    userMessage: 'Hi honey, how are you doing???? Long time no see. Where have you been?'
                },
                {
                    id: 2, userImg: 'https://themified.com/friend-finder/images/users/user-1.jpg',
                    userName: 'Sarah Cruiz',
                    userMessage: 'Hi honey, how are you doing???? Long time no see. Where have you been?'
                },
                {
                    id: 3, userImg: 'https://themified.com/friend-finder/images/users/user-1.jpg',
                    userName: 'Sarah Cruiz',
                    userMessage: 'Hi honey, how are you doing???? Long time no see. Where have you been?'
                }
            ],
            newMessageText: ''
        },
        sidebar: {
            users: [{
                id: 1, userImg: 'https://themified.com/friend-finder/images/users/user-2.jpg',
                userName: 'Linda Lohan',
            },
                {
                    id: 2, userImg: 'https://themified.com/friend-finder/images/users/user-10.jpg',
                    userName: 'Julia Cox',

                },
                {
                    id: 3, userImg: 'https://themified.com/friend-finder/images/users/user-3.jpg',
                    userName: 'Sophia Lee',

                },
                {
                    id: 4, userImg: 'https://themified.com/friend-finder/images/users/user-4.jpg',
                    userName: 'John Doe',

                },
                {
                    id: 5, userImg: 'https://themified.com/friend-finder/images/users/user-9.jpg',
                    userName: 'Anna Young',

                }

            ]
        }
    },
    getState() {
        return (this._state)
    },

    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },

    dispatch(action) {
        this._state.newsFeedPage = newsFeedReducer(this._state.newsFeedPage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar=sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state);
    }
}

export default store;

