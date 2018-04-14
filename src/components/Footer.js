import React from 'react';
import "../styles/css/materialize.css";
import "../styles/css/materialize.min.css";
import "../styles/css/style.css";


const Footer = () => (

<footer className="page-footer deep-purple darken-1">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Company Bio</h5>
          <p className="grey-text text-lighten-4">SMU Coding Bootcamp April 2018.</p>


        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Settings</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Connect</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Made with <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
      </div>
    </div>
  </footer>

);


export default Footer;
