import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, sendMessage, updateNewDialogsText,  updateNewPostText} from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter><App state={state}
                                addPost={addPost}
                                sendMessage={sendMessage}
                                updateNewPostText={updateNewPostText}
                                updateNewDialogsText={updateNewDialogsText}
            /></BrowserRouter>
        </React.StrictMode>
    )
};