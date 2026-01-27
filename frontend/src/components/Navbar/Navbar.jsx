import React, { useContext } from "react";
import { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";


const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <nav className="h-16 flex items-center px-6 bg-white shadow">

        <div className="navbar">
     <Link to="/"><img src={assets.logo} className="navbar-logo" /></Link>

      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu === "menu" ? "navbar-item active" : "navbar-item"}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "navbar-item active" : "navbar-item"}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "navbar-item active" : "navbar-item"}>Contact us</a>
      </ul>
<div className="navbar-right">
        <img src={assets.search_icon} className="search-icon" />

        <div className="navbar-search-icon">
           <Link to="/cart"><img src={assets.basket_icon} className="cart-icon" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)} className="signIn-button">Sign In</button>
</div>

</div>
    </nav>
  );
};

export default Navbar;
