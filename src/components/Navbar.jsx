import React from "react";

const Navbar = () =>{
    return(      <nav className='nav'>
    <div><a  className="pages" href='#'>Profile</a></div>
    <div><a className="pages" href='#'>News</a></div>
    <div><a className="pages" href='#'>Messages</a></div>
    <div><a className="pages" href='#'>Music</a></div>
    <div><a className="pages" href='#'>Settings</a></div>
  </nav>

    );
}

export default Navbar;