import React from "react";
import  s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) =>{
    return(
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost my_posts={props.my_posts} addPost={props.addPost}/>
        </div>
    );
}


export default Profile;