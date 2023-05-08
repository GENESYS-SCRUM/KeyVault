import React from 'react';
import "./CustomButton.css";
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <Link to="/CreateAccount"><button className='CustomButton'>Sign up</button></Link>
    
  )
}

export default SignUp;