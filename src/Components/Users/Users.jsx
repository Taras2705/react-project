import React from "react";
import style from './Users.module.css';
import {NavLink} from "react-router-dom";

import avatarUser from '../../assets/images/avatarUser.jpg'


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(page => {
                    return (<span className={props.currentPage === page && style.selectedPage}
                                  onClick={() => {
                                      props.onPageChanged(page)
                                  }}>{page}</span>)
                })}
            </div>
            {props.users.map(users => <div key={users.id}>
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
                                props.unFollow(users.id)
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