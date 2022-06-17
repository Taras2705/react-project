import {combineReducers, legacy_createStore} from "redux";
import newsFeedReducer from "./newsFeed-reduser";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebur-reducer";

let reducers=combineReducers({
    newsFeedPage:newsFeedReducer,
    messagesPage:dialogsReducer,
    sidebar: sidebarReducer,
})
let store=legacy_createStore(reducers);






export default store;