import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Banner from './components/Banner';
import ContainerInfo from './components/ContainerInfo';
import Footer from './components/Footer'
import Parallax from 'react-image-parallax2';

const App = () => (

  <div className="main-container" >
    <Navbar />
    <Parallax/>
    <Banner />
    
    <ContainerInfo />
    
    <Footer />
    
  </div>

);
 
 export default App;

