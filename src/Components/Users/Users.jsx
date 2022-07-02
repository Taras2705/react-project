import style from './Users.module.css';
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import avatarUser from '../../assets/images/avatarUser.jpg'

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger;
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            {props.users.map(users => <div key={users.id}>
                <div className={style.userComponent}>
                    <div className={style.usersInfo}>
                        <img src={users.photos.small!==null?users.photos.small:avatarUser} className={style.usersPhoto} alt=""/>
                        <div>
                            <div><NavLink to='/peopleNearby' className={style.fullName}>{users.name}</NavLink></div>
                            <div className={style.specialty}>{users.status}</div>
                            <div className={style.location}>
                                {'users.location.city'},{'users.location.country'}
                            </div>
                        </div>
                    </div>

                    <div>
                        {users.followed ?
                            <button onClick={() => {
                                props.unfollow(users.id)
                            }} className={style.btn}>Follow</button>
                            : <button onClick={() => {
                                props.follow(users.id)
                            }} className={style.btn}>UnFollow</button>}

                    </div>
                </div>
            </div>)
            }
        </div>)


}

export default Users;