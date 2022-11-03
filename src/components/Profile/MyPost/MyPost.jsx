import React from "react";
import s from './MyPost.module.css'
import Post from "../Posts/Post";

const MyPost = (props) => {
    let mytags = props.my_posts.map((data) => <Post  src={data.src} like={data.like} post={data.post} />);
    return(
        <div className={s.myPost}>
            My Posts
            <div className={s.item}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                {mytags}
            </div>
        </div>
    );
}

export default MyPost;