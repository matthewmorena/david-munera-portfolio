import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero 
        imageSrc="https://static.wixstatic.com/media/e645a6_9f68d4487f374106b5ae1befa8179ca4~mv2.png"
        altText="David"
      >
        <h1 className="hero-title">
            Hello. <br />
            I'm <span className="emphasis">David.</span>
        </h1>
        <h2 className="hero-subtitle">
            App Designer, Web Designer, and Marketer
        </h2>
        <p className="hero-description">
            Crafted by a college designer with hands-on experience in the industry, my journey from internships to launching this platform reflects a passion for innovative web and app design tailored to elevate your digital experience.
        </p>
      </Hero>
    </div>
  );
}

export default App;