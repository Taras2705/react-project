import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toogleIsFatching,
    unFollow
} from "../../Redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Preloader from "../../coomon/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFatching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toogleIsFatching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.toogleIsFatching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toogleIsFatching(false);
            this.props.setUsers(response.data.items);



        })

    }

    render() {
        return (<>
            {this.props.isFatching?<Preloader/>:null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
            />
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFatching: state.usersPage.isFatching

    }
};

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toogleIsFatching
})(UsersContainer);
