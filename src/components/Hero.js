import './Hero.css';

const Hero = ({ imageSrc, altText, children }) => {
    return (
        <div className="hero">
            <div className="hero-text">
                {children} {/* Render the passed HTML/JSX */}
            </div>
            <div className="hero-image">
                <img alt={altText} src={imageSrc}></img>
            </div>
        </div>
    );
}

export default Hero;
