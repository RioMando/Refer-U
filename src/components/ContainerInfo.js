import React from 'react';
import "../styles/css/materialize.css";
import "../styles/css/materialize.min.css";
import "../styles/css/style.css";
import Parallax from 'react-image-parallax2';



const ContainerInfo = () => (

<div>
    
<div className="container">
  <div className="section" />

    <div className="row" />
      <div className="col s12 center">
        <h3><i className="mdi-content-send brown-text" /></h3>
        <h2 className="center purple-text text-accent-4">
            <i className="large material-icons">important_devices</i>
        </h2>
        <h4>Contact Us</h4>
        <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
      </div>
  
  


  <div className="Parallax-container valign-wrapper">
   <div className="section no-pad-bot">
     <div className="container">
       <div className="row center">
              
                <Parallax 
                reduceHeight={1 / 2} 
                src={require("../styles/pictures/conversation.jpg")} id="imgage3" />    
         <h4 className="header col s12 light">Choose your Reference Wisely. Choose REFER-U.</h4>
       </div>
     </div>
   </div>
  </div>

  
</div>


</div>
);

export default ContainerInfo;