import React from "react";
import Navigation from "../navigation";
import {Routes, Route, HashRouter} from "react-router-dom";
import Home from "../home";
import Bookmarks from "../bookmarks";
import Profile from "../profile";
import './tuiter.css'
import Explore from "../explore";
import Notifications from "../notifications";
import Messages from "../messages";
import Lists from "../lists";
import More from "../more";
import Songs from "../songs";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import songReducer from "../songs/song-reducer";
import Sidebar from "../sidebar";
import SongDetails from "../songDetails";
import WhatsHappening from "../whats-happening";
import Signup from "../profile/signup";
import {Login} from "../profile/login";
import commentReducer from "../songDetails/comment-reducer";
import likeReducer from "../songDetails/like-reducer";

const store = configureStore({
  reducer: {
    songs: songReducer,
    comments: commentReducer,
    likes: likeReducer,
  }
})

const Tuiter = () => {
  return(
      <Provider store={store}>
        <HashRouter>
          <div className="container">
            <div className="ttr-tuiter">
              <div className="ttr-left-column">
                <Navigation/>
              </div>
              <div className="ttr-center-column">
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/tuiter" element={<Home/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/explore" element={<Explore/>}/>
                  <Route path="/notifications" element={<Notifications/>}/>
                  <Route path="/messages" element={<Messages/>}/>
                  <Route path="/bookmarks" element={<Bookmarks/>}/>
                  <Route path="/lists" element={<Lists/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/songs" element={<Songs/>}/>
                  <Route path="/more" element={<More/>}/>
                  <Route path="/song-details" element={<SongDetails/>}></Route>
                </Routes>
              </div>
              <div className="ttr-right-column">
                <Routes>
                  <Route path="/songs" element={<Sidebar/>}/>
                  <Route path="/song-details" element={<Sidebar/>}/>
                  <Route path="/*" element={<WhatsHappening/>}/>
                </Routes>
              </div>
            </div>
          </div>
        </HashRouter>
      </Provider>
  );
}
export default Tuiter;