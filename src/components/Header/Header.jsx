import React from 'react';
import s from'./Header.module.css'

const Header = () => {
    return(<header className={s.header}>
    <img src="https://avatars.mds.yandex.net/i?id=c2ea733a89055dbd255cd5097c4ffec0-4353628-images-thumbs&n=13" alt="Картинка кампании"/>
  </header>);
}

export default Header