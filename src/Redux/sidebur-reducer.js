let initialState={
    users: [{
        id: 1, userImg: 'https://themified.com/friend-finder/images/users/user-2.jpg',
        userName: 'Linda Lohan',
    },
        {
            id: 2, userImg: 'https://themified.com/friend-finder/images/users/user-10.jpg',
            userName: 'Julia Cox',

        },
        {
            id: 3, userImg: 'https://themified.com/friend-finder/images/users/user-3.jpg',
            userName: 'Sophia Lee',

        },
        {
            id: 4, userImg: 'https://themified.com/friend-finder/images/users/user-4.jpg',
            userName: 'John Doe',

        },
        {
            id: 5, userImg: 'https://themified.com/friend-finder/images/users/user-9.jpg',
            userName: 'Anna Young',

        }

    ]
};
const sidebarReducer=(state=initialState,action)=>{
    return state
}
export default sidebarReducer;