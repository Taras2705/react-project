import {combineReducers, legacy_createStore} from "redux";
import newsFeedReducer from "./newsFeed-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebur-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";

let reducers=combineReducers({
    profilePage:profileReducer,
    newsFeedPage:newsFeedReducer,
    messagesPage:dialogsReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer
})
let store=legacy_createStore(reducers);






export default store;