  import React from 'react';
  import "../styles/css/materialize.css";
import "../styles/css/materialize.min.css";
import "../styles/css/style.css";
import Img from 'react-image';
import Parallax from 'react-image-parallax2';
import index from 'react-image';


  const Banner = () => (
<div>
  <div id="index-banner" className="Parallax-container">
    <div className="section no-pad-bot">
      <div className="container">
        <br/><br/>
        <h1 className="header center white-text">Your Reference, Right Away!</h1>
        <div className="row center">
          
        </div>
        <div className="row center">

          <a href="http://google.com/" id="download-button" className="btn-large waves-effect waves-light purple accent-4">Get Started!</a>
              
        </div>
            <div>
              <Parallax
                reduceHeight={1 / 2} 
                src={require("../styles/pictures/computer.jpg")} alt="Unsplashed background img 1" />
            </div>
        <br/><br/>

      </div>
    </div>
    
  </div>




  <div className="container" id="icon-section">
    <div className="section">

      
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center purple-text text-accent-4"><i className="material-icons">verified_user</i></h2>
            <h5 className="center">References Made Easier</h5>

            <p className="light">The person giving you a reference may need to fill out a questionnaire or speak to someone from HR
            on the phone. Providing this favor is no small task. With REFER-U give your potential reference plenty of time to consider the request,
            and be sure to thank them for their time and efforts. </p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center purple-text text-accent-4"><i className="material-icons">wc</i></h2>
            <h5 className="center">User Experience Focused</h5>

            <p className="light"> You can connect with your potential reference through messages and even expand your reference list through our Network tab! Meet new people
           and add them to your list!</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center purple-text text-accent-4"><i className="material-icons">settings</i></h2>
            <h5 className="center">Easy to work with</h5>

            <p className="light">We do most of the heavy lifting for you to help you provide easy access to your References. To provide a smoother experience
            for job seekers, and college students working towards their future.</p>
          </div>
        </div>
      </div>

    </div>
  </div>


  <div className="Parallax valign-wrapper">
    <div className="section no-pad-bot">
      <div className="container">
        <div className="row center">
              
              <Parallax
                reduceHeight={1 / 3}
                src={'http://lorempixel.com/700/600/animals/'} />        
              
          <h4 className="header col s12 light">Let us help you organize your References!</h4>
        </div>
      </div>
    </div>
    
  </div>
</div>

);

export default Banner;