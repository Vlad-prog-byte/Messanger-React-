import React from "react";
import  s from './Profile.module.css'
import Post from './Posts/Post'

const Profile = () =>{
    return(
      <div className={s.content}>
        <div><img className="picture"  src="https://avatars.mds.yandex.net/i?id=cede65bd2bac1c361c8ec2897715ad6e-5487767-images-thumbs&n=13" alt="Картинка контента"/></div>
        <div className={s.item}>ava + desription</div>
        <div className={s.item}>
          {/* <textarea className={s.put}>Написать постadf</textarea>
          <button>Отправить</button> */}
        </div>
        <div className={s.item}>New Post</div>
        <div className="posts">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
    );
}


export default Profile