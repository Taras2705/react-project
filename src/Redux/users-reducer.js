const follow = 'FOLLOW';
const unFollow = 'UNFOLLOW';
const setUsers ='SET_USERS';
let initialState = {
    users: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user, followed: true
                        }
                    }
                    return user;
                })

            }
        case unFollow:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user, followed: false
                        }
                    }
                    return user;
                })

            }
        case setUsers:
            return {
                ...state,
                users: [...state.users,...action.users]
            }
        default:
            return state;
    }
}
export const followAC=(userId) => ({type: follow, userId});
export const unFollowAC= (userId) => ({type: unFollow, userId});
export const setUsersAC= (users) => ({type: setUsers, users});


export default usersReducer;
