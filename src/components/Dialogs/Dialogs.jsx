import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Post from "../Profile/Posts/Post";

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
    let diaolog_item_data =[
        {name : "Vlad", id : "1"},
        {name : "Anton", id : "2"},
        {name : "Grisha", id : "3"},
        {name : "Ilya", id : "4"},
        {name : "Sergey", id : "5"},
        {name : "Anna", id : "6"}
    ];
    let dialog_item_tags = diaolog_item_data.map((data) => <DialogItem  name={data.name} id={data.id}/>);

    let message_data =[
        {message : "Hello"},
        {message : "Nice to meet you"},
        {message : "I am glad meet you"},
        {message : "I am too"},
        {message : "How are you guys?"},
        {message : "I am fine"}
    ];
    let message_tags = message_data.map((data) =>  <Message message={data.message}/>)

    return(
        <div className={s.dialogs}>
            <div className={s.users}>
                    <DialogItem name="Vlad" id="1"/>
                    <DialogItem name="Anton" id="2"/>
                    <DialogItem name="Grisha" id="3"/>
                    <DialogItem name="Ilya" id="4"/>
                    <DialogItem name="Sergey" id="5"/>
                    <DialogItem name="Anna" id="6"/>
            </div>
            <div className={s.messages}>
                {message_tags}
                {/*<Message message="Hello"/>*/}
                {/*<Message message="Nice to meet you"/>*/}
                {/*<Message message="I am glad meet you"/>*/}
                {/*<Message message="I am too"/>*/}
                {/*<Message message="How are you guys?"/>*/}
                {/*<Message message="I am fine"/>*/}
            </div>
        </div>
    );
}

export default Dialogs;