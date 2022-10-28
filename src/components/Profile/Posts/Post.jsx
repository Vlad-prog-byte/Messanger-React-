import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
          <div className={s.item}>
            <img className = {s.avatar} src="https://avatars.mds.yandex.net/i?id=95ff8cfa11e527a39e223ef096ad47de-4937686-images-thumbs&n=13" alt="Аватарка пользователя"/>
            Post 1
          </div>
    );
}

export default Post;