import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
          <div className={s.item}>
              <img className = {s.avatar} src={props.src} alt="Аватарка пользователя"/>
              <span>like : {props.like}</span>
              <br/>
              <span>Post : {props.post}</span>
          </div>
    );
}

export default Post;