import React from 'react';
import "./Nav.css";
import logo from "../images/logo.png";


function Nav() {
  return (
    <div className='navbar'>
        <img src={logo} alt=''/>
        <h5>Support</h5>
    </div>
  )
}

export default Nav