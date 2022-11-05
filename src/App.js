import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News  from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";

import {BrowserRouter, Route, Routes} from "react-router-dom";



const Application = (props) => {
    console.log(props.AppState.profilePage.posts)
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile" element={<Profile my_posts={props.AppState.profilePage.posts} addPost={props.addPost}/>}/>
                    <Route path="/dialogs" element={<Dialogs dialogs={props.AppState.messagePage.dialogs} messages={props.AppState.messagePage.messages}/>}/>
                    <Route path="/news" element={<News />}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default Application;