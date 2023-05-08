import React from 'react'
// import "./CustomButton.css";
import "./acctBtn.css"
import { Link } from 'react-router-dom';

function Goggle() {
  return (
    <Link to="/addkey"><button className='acctBtn'>Goggle</button></Link>
    
  )
}

export default Goggle;