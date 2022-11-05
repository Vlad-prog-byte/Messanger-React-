import React from "react";
import s from './MyPost.module.css'
import Post from "../Posts/Post";


const   MyPost = (props) => {

    let ref_button = React.createRef()

    const postButton = () => {
        debugger
        let text = ref_button.current.value;
        // ref_button.current.value = '';
        alert(text);
        props.addPost(text);
    }


    let mytags = props.my_posts.map((data) => <Post  src={data.src} like={data.like} post={data.post} />);
    return(
        <div className={s.myPost}>
            My Posts
            <div className={s.item}>
                <textarea ref={ref_button}></textarea>
                <button onClick={postButton}>Add post</button>
            </div>
            <div>
                {mytags}
            </div>
        </div>
    );
}

export default MyPost;