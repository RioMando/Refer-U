import React from 'react';
import "../styles/css/materialize.css";
import "../styles/css/materialize.min.css";
import "../styles/css/style.css";
//import Img from 'react-image';//
import Parallax from 'react-image-parallax2';
//import index from 'react-image';//



const Profile = () => (
    
// search bottom to google
<div className="row left">

    <a href="http://google.com/" id="download-button" className="btn-large waves-effect waves-light purple accent-4">Google</a>

</div>
    //frame work for clink in bottom function from html
    <div className="row left">

        <a href=" " id="download-button" className="btn-large waves-effect waves-light purple accent-4">Cover Letter</a>

    </div>
    //frame work for clink in bottom function from html
    <div className="row left">

        <a href=" " id="download-button" className="btn-large waves-effect waves-light purple accent-4">Reference Letter</a>

    </div>
    //frame work for click in bottom function from html
    <div className="row centers">

        <a href=" " id="download-button" className="btn-large waves-effect waves-light purple accent-4">Resume</a>

    </div>

    <div>
        <Parallax
            src={require("../styles/pictures/computer.jpg")} alt="Unsplashed background img 1" />
    </div>

    );

    export default Profile;