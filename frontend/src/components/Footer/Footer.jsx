import React from 'react'
import "./Footer.css";
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis possimus cumque et unde, sed quos veritatis. Reiciendis suscipit tempora ea ratione porro libero consequatur iusto aliquid impedit, animi nemo!</p>

            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-234-567-890</li>
                    <li>contact@example.com</li>
                </ul>
            </div>
      </div>
      <hr />
     
        <p className='footer-copyright'>&copy; 2024 Food Delivery App. All rights reserved.</p>
     
    </div>
  )
}

export default Footer
