import React, { useRef, useEffect,useState } from 'react';
import '../../styles/Header.css';
import logo from '../../assets/img/dumble.png';

import RegistrationModal from '../UI/RegistrationModal';

const nav_links = [
  {
    path: '#home',
    display: 'Home'
  },
  {
    path: '#schedule',
    display: 'schedule'
  },
  {
    path: '#classes',
    display: 'classes'
  },
  {
    path: '#pricing-plan',
    display: 'pricing'
  }
];

const Header = () => {
  const headerRef = useRef(null);
  const [isRegistrationOpen,setIsRegistrationOpen]=useState(false);
  const openRegistrationForm = ()=>{
    setIsRegistrationOpen(true);
  };
  const closeRegistrationForm = ()=>{
    setIsRegistrationOpen(false);
  }

  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky_header');
    } else {
      headerRef.current.classList.remove('sticky_header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFunc);
    return () => window.removeEventListener('scroll', headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    if (targetAttr === '#') {
      // Scroll to the top of the page (header) without the offset
      window.scrollTo({
        left: 0,
        top: location,
      });
    } else {
      // For other links, scroll with the offset
      window.scrollTo({
        left: 0,
        top: location - 80,
      });
    }
  };

  return (
    <header className='header'  ref={headerRef}>
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <div className="logo_img"><img src={logo} alt='' /></div>
            <h2>Jass</h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav_links.map(item => (
                <li className="nav_item" key={item.display}>
                  <a onClick={handleClick} href={item.path}>{item.display}</a>
                </li>
              )
              )}
            </ul>
          </div>
          <div className="nav_right">
            <button className="register_btn" onClick={openRegistrationForm}>Register</button>
            <span className="mobile_menu"><i className="ri-menu-line"></i></span>
          </div>
          {isRegistrationOpen && (
            <RegistrationModal onClose={closeRegistrationForm}/>
          )}
        </div>
      </div>
    </header>
  );
};


export default Header;
