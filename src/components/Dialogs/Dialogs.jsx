import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
// import Post from "../Profile/Posts/Post";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return(
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return(
        <div>{props.message}</div>
    );
}

const Dialogs = (props) => {
    let dialog_item_tags = props.dialogs.map((data) => <DialogItem  name={data.name} id={data.id}/>);

    let message_tags = props.messages.map((data) =>  <Message message={data.message}/>)

    return(
        <div className={s.dialogs}>
            <div className={s.users}>
                {dialog_item_tags}
            </div>
            <div className={s.messages}>
                {message_tags}
            </div>
        </div>
    );
}

export default Dialogs;