import s from './DialogsUser.module.css';
import {NavLink} from "react-router-dom";

const DialogsUser=(props)=>{
    return(
        <NavLink to={'/messages/'+props.id}>
        <div className={s.user}>
                    <img className={s.userImg} src={props.userImg} alt=""/>
                    <div className={s.userInfo}>
                        <h6>{props.userName}</h6>
                    <p className={s.userMassage}>{props.userMessage}</p>
                    </div>

                </div>
</NavLink>

    )
};
export default DialogsUser;