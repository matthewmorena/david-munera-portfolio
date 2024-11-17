import './Hero.css';

const Hero = ({ imageSrc, altText, children }) => {
    return (
        <div className="hero-banner">
            <div className="hero-banner-text">
                {children} {/* Render the passed HTML/JSX */}
            </div>
            <div className="hero-banner-image">
                <img alt={altText} src={imageSrc}></img>
            </div>
        </div>
    );
}

export default Hero;
