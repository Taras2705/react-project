import s from "./User.module.css";
import {NavLink} from "react-router-dom";

const UserOnline = (props) => {
    return (
        <div className={s.friend}>
            <NavLink to='/messages'>
                <img className={s.friendImg} src={props.userImg}
                     alt="Linda Lohan"/>
            </NavLink>
        </div>
    )
}
export default UserOnline;