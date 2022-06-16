const sendMessage = 'SEND-MESSAGE';
const updateNewDialogsText = 'UPDATE-NEW-DIALOGS-TEXT';
const dialogsReducer = (state, action) => {
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