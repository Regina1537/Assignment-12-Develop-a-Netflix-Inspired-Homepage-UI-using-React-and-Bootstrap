// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/netflix-logo.png'; // You can use a public image URL too

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4 fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Netflix" height="30" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {['Home', 'TV Shows', 'Movies', 'Latest', 'My List'].map((item) => (
              <li className="nav-item" key={item}>
                <NavLink className="nav-link" to={`/${item.toLowerCase().replace(' ', '')}`}>
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="btn btn-danger">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

return (
    <nav className={scrolled ? 'navbar navbar--dark' : 'navbar'}>
      <div className="navbar__left">
        <img src="https://i.pinimg.com/736x/ee/bb/78/eebb789c45a1bfd293ebc1e7839a47c1.jpg" alt="Netflix" className="navbar__logo" />
        <ul className="navbar__menu">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>My List</li>
        </ul>
      </div>
      <div className="navbar__right">
        <img src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg" alt="Search" />
        <img src="https://i.pinimg.com/736x/7e/83/1b/7e831b95ddbce65a6b1d0b6ee81eb3ed.jpg" alt="Notifications" />
        <div className="navbar__profile">
          <img src="https://i.pinimg.com/736x/5f/c2/08/5fc208cf051c99275f286ec2aeeb6d92.jpg" alt="Profile" />
        </div>
      </div>
    </nav>
  );


export default Navbar;
