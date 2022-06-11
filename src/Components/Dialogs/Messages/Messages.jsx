import s from './Messages.module.css';


const Messages=(props)=>{
    return(
        <div className={s.userMessage}>
            <img className={s.userImg} src={props.userImg} alt=""/>
            <div className={s.userMsg}>
                <h4>{props.userName}</h4>
                <p className={s.userText}>{props.userMessage}</p>
            </div>

        </div>

    )
};
export default Messages;