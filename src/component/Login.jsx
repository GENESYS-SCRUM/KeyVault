import React from 'react';
import "./CustomButton.css";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Link to="/Logs"> <button className='CustomButton'>Log in</button> </Link> 
  )
}

export default Login;