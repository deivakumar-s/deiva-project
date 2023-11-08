import React from 'react';
import '../../styles/Footer.css';
import logo from '../../assets/img/dumble.png';

const Footer = () => {
    
  return (
  <footer className='footer' data-aos='zoom-in' data-aos-duration='1500'>
<div className="container">
    <div className="footer_wrapper">
        <div className="footer_box">
        <div className="logo">
          <div className="logo_img">
            <img src={logo} alt=''/></div>
            <h2>Jass</h2>
          </div>
          <p>Jass Fitnes studio is a multi-chain fitness club that focuses on customer-related service.The fitness centre offers various free weights and exercise machines to match your cardio and strength training needs.</p>
        </div>
        <div className="footer_box">
            <h4 className="footer_title">company</h4>
            <ul className="footer_links">
                <li><a href="#">Our Program</a></li>
                <li><a href="#">our plan</a></li>
                <li><a href="#">Become a member</a></li>
               
            </ul>
        </div>
        <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
                <li><a href="#">About us </a></li>
                <li><a href="#">why best us </a></li>
                <li><a href="#">support</a></li>
               
            </ul>
        </div>
        <div className="footer_box">
            <h4 className="footer_title">CONTACT</h4>
            <ul className="footer_links">
                <li><a href="#">6369183126 </a></li>
                <li><a href="#">Jassthegym@gmail.com </a></li>
                <li><a href="#">Madurai,Tamil Nadu</a></li>
               
            </ul>
        </div>
    </div>
    <p className='copyright'>
        copyright - 2023 Jass Designed by Deivakumar. All rights reserved.</p>
</div>
  </footer>
  )
}

export default Footer