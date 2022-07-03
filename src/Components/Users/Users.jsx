import React from "react";
import style from './Users.module.css';
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import avatarUser from '../../assets/images/avatarUser.jpg'

class Users extends React.Component {
    constructor(props) {
        super(props);
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.users.map(users => <div key={users.id}>
                    <div className={style.userComponent}>
                        <div className={style.usersInfo}>
                            <img src={users.photos.small !== null ? users.photos.small : avatarUser}
                                 className={style.usersPhoto} alt=""/>
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
                                    this.props.unFollow(users.id)
                                }} className={style.btn}>Follow</button>
                                : <button onClick={() => {
                                    this.props.follow(users.id)
                                }} className={style.btn}>UnFollow</button>}

                        </div>
                    </div>
                </div>)
                }
            </div>)
    }

}

export default Users;