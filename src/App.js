import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Banner from './components/Banner';
import ContainerInfo from './components/ContainerInfo';
import Footer from './components/Footer'


const App = () => (

  <div className="main-container">
    <Navbar />
    <Banner />
    <ContainerInfo />
    <Footer />
    
  </div>

);
 
 export default App;

