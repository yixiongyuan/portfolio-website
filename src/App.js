import React from 'react';
import { Redirect, Route, Routes, useHistory } from 'react-router-dom';
import NavBar from './components/NavBar';
import './index.css';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import PostCreate from './components/PostCreate';
import PostDisplay from './components/PostDisplay';

function App() {
  return (
    <div>

      <NavBar />
      <Home />
      <SocialLinks />
      <Portfolio />
      <PostDisplay />
      <Experience />
      <Contact />
      <About />

    </div>
  );
}

export default App;
