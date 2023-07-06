import React from 'react';
import NavBar from './components/NavBar';
import './index.css';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Slider from './components/Slider';
import PostCreate from './components/PostCreate';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <Portfolio />
      <Slider />
      <Experience />
      <Contact />
      <PostCreate />
      <About />
    </div>
  );
}

export default App;
