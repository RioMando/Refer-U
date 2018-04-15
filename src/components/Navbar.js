import React from 'react';
import "../styles/css/materialize.css";
import "../styles/css/materialize.min.css";
import "../styles/css/style.css";





const Navbar = () => (
  

   <div className="deep-purple darken-1" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="home.html" className="brand-logo" className="white-text">
        <img  src={require("../styles/pictures/Logo.png")} /> </a>
        
        <ul className="right hide-on-med-and-down ">
          <li>
            <a className="login" id="logOutLinkId" onClick="logout();">Log in</a>
          </li>
        </ul>
        <ul className="right hide-on-med-and-down">
          <li>
            <a className="Network" href="#">Network</a>
          </li>
        </ul>
        <ul className="right hide-on-med-and-down">
          <li>
            <a className="Messages" href="#">Messages</a>
          </li>
        </ul>
        <ul className="right hide-on-med-and-down">
          <li>
            <a className="Profile" href="#">My Profile</a>
          </li>
        </ul>
        <ul className="right hide-on-med-and-down">
          <li>
            <a className="Home" href="home.html">Home</a>
          </li>
        </ul>
        
        <ul id="nav-mobile" className="side-nav">
         
        </ul>
       
      <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>
    </div>
  
);

export default Navbar;