import React from 'react'
import "./LoginPopup.css";
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = React.useState("Login");

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className='login-popup-close-icon' />
        </div>
        <div className="login-popup-inputs">
            {currState === "Login"?<></>:<input type="text" placeholder='Enter Name'  required/>}
            
            <input type='email' placeholder='Enter your email' required />
            <input type="password" placeholder='Enter your password' required />
          
        </div>
        <button className='login-popup-button'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms & conditions</p> 
        </div>
        {currState === "Login" ? <p onClick={() => setCurrState("Sign Up")}>Create a new account?
            <span> Click here</span></p> : 
            <p onClick={() => setCurrState("Login")}>Already have an account? <span> Login here</span></p>}
       
      </form>
    </div>
  )
}

export default LoginPopup
