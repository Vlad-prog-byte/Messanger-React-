import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return(
        <div className={s.profileInfo}>
            <div><img className="picture"  src="https://avatars.mds.yandex.net/i?id=cede65bd2bac1c361c8ec2897715ad6e-5487767-images-thumbs&n=13" alt="Картинка контента"/></div>
            <div className={s.item}>ava + desription</div>
        </div>
    );
}

export default ProfileInfo;