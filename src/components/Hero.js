
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-banner">
            <div className="hero-banner-text">
                <h1 className="hero-title">
                    Hello. <br/>
                    I'm <span className="emphasis">David.</span>
                </h1>
                <h2 className="hero-subtitle">
                    App Designer, Web Designer, and Marketer
                </h2>
                <p className="hero-description">
                    Crafted by a college designer with hands-on experience in the industry, my journey from internships to launching this platform reflects a passion for innovative web and app design tailored to elevate your digital experience.
                </p>
            </div>
            <div className="hero-banner-image">
                <img alt="David" src="https://static.wixstatic.com/media/e645a6_9f68d4487f374106b5ae1befa8179ca4~mv2.png/v1/crop/x_76,y_0,w_3736,h_4991/fill/w_528,h_705,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/file.png"></img>
            </div>
        </div>
    );
}

export default Hero;