import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero 
        imageSrc="https://static.wixstatic.com/media/e645a6_9f68d4487f374106b5ae1befa8179ca4~mv2.png"
        altText="Headshot of David"
        imageOnRight = "true"
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

      <hr id="projects"></hr>
      <Banner
        title="Projects"
        subtitle="Check out the projects that I have done throughout college."
        text="Get to know me better!"
      ></Banner>

      <Hero 
        imageSrc="https://static.wixstatic.com/media/e645a6_fac28bae2b0544a28b8d3f54501e70d3~mv2.png/v1/fill/w_653,h_923,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/e645a6_fac28bae2b0544a28b8d3f54501e70d3~mv2.png"
        altText="WayWize Menu Screenshot"
      >
        <h2 className="hero-title">
          WayWize
        </h2>
        <p className="hero-description">
          <span className="image-tag">Website Design</span>
          <span className="image-tag">Website Development</span>
        </p>
        <div className="hero-link">
          <a href="#projects" className="cta-button">See this Project</a>
        </div>
      </Hero>

      <Hero 
        imageSrc="https://static.wixstatic.com/media/e645a6_79d82d024f6f4e9989a72b4a121fafb2~mv2.png/v1/fill/w_428,h_926,al_c,q_90,enc_auto/e645a6_79d82d024f6f4e9989a72b4a121fafb2~mv2.png"
        altText="WayWize Menu Screenshot"
        imageOnRight = "true"
      >
        <h2 className="hero-title">
          Krespos
        </h2>
        <p className="hero-description">
          <span className="image-tag">App Design</span>
          <span className="image-tag">App Development</span>
        </p>
        <div className="hero-link">
          <a href="#projects" className="cta-button">See this Project</a>
        </div>
      </Hero>

      <Hero 
        imageSrc="https://static.wixstatic.com/media/e645a6_a696d8b890f1408dae935c86ef5905bd~mv2.png/v1/fill/w_468,h_1013,al_c,lg_1,q_90,enc_auto/e645a6_a696d8b890f1408dae935c86ef5905bd~mv2.png"
        altText="WayWize Menu Screenshot"
      >
        <h2 className="hero-title">
          Kickoff
        </h2>
        <p className="hero-description">
          <span className="image-tag">App Design</span>
          <span className="image-tag">App Development</span>
        </p>
        <div className="hero-link">
          <a href="#projects" className="cta-button">See this Project</a>
        </div>
      </Hero>

      <hr id="contact"></hr>
      <Banner
        title="Contact Me"
        subtitle="Let my creativity and expertise transform your vision into a stunning, user-friendly website or app that stands out and drives results."
        text="Contact me through my Email or LinkedIn Below!"
      ></Banner>

      <div style={{width: "10%", display: "flex", justifyContent: "space-between", margin: "auto"}}>
        <a href="https://www.linkedin.com/in/david-munera-a2862a1b6/">
          <img alt="linkedin logo" src="https://static.wixstatic.com/media/11062b_60c5fc4a3ecd49f2a697206b09eeace1~mv2.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_60c5fc4a3ecd49f2a697206b09eeace1~mv2.png"></img>
        </a>
        <a href="mailto:davidmunera828@gmail.com">
          <img alt="email logo" src="https://static.wixstatic.com/media/e645a6_0230c684ae3e436ca3e1b7757f28ff96~mv2.jpg/v1/fill/w_53,h_53,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e645a6_0230c684ae3e436ca3e1b7757f28ff96~mv2.jpg"></img>
        </a>
      </div>

      <p style={{marginTop: "50px"}}>© David Munera Designs 2024&nbsp;&nbsp;&nbsp;
        <a style={{textDecoration: "none", color: "#000"}} href="mailto:davidmunera828@gmail.com">Email</a>&nbsp;&nbsp;&nbsp;
        <a style={{textDecoration: "none", color: "#000"}} href="https://www.linkedin.com/in/david-munera-a2862a1b6/">LinkedIn</a>
      </p>

    </div>
  );
}

export default App;