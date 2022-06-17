const sendMessage = 'SEND-MESSAGE';
const updateNewDialogsText = 'UPDATE-NEW-DIALOGS-TEXT';
let initialState={
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
}
const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case sendMessage:
            let newTextMessage = {
                id: 4,
                userImg: 'https://themified.com/friend-finder/images/users/user-1.jpg',
                userName: 'Sarah Cruiz',
                userMessage: state.newMessageText

            }
            state.messages.push(newTextMessage);
            state.newMessageText = '';
            return state
        case updateNewDialogsText:
            state.newMessageText = action.textDialogs;
            return state
        default:
            return state;
    }
}
export const sendMessageActionCreator = () => ({type: sendMessage});

export const updateNewDialogsTextActionCreator = (message) => ({type: updateNewDialogsText, textDialogs: message});
export default dialogsReducer;