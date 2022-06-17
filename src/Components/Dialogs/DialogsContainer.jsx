import {sendMessageActionCreator, updateNewDialogsTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state=props.store.getState().messagesPage;

    let onSendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());

    }
    let dialogsChange = (message) => {
        let action = updateNewDialogsTextActionCreator(message);
       props.store.dispatch(action);
    }
    return (
        <Dialogs sendMessage={onSendMessage}  updateNewDialogsText={dialogsChange} newMessageText={state.newMessageText}
                 dialogs={state.dialogs}
                 messages={state.messages}
        />
    )
};
export default DialogsContainer;