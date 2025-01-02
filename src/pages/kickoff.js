import Nav from '../components/Nav';
import Spotlight from '../components/Spotlight';

const Kickoff = () => {
    return <div>
        <Nav />
        <Spotlight>
            <div className='spotlight-column'>
                <span className='spotlight-title'><strong>KickOff</strong></span>
            </div>
            <div className='spotlight-column'>
                <span className='spotlight-subtitle'><strong>Duration</strong></span>
                <p>4 months</p>
            </div>
            <div className='spotlight-column'>
                <span className='spotlight-subtitle'><strong>My Role</strong></span>
                <p>Research<br />
                    Prototyping<br />
                    Interface Design</p>
            </div>
            <div className='spotlight-column'>
                <span className='spotlight-subtitle'><strong>Tools</strong></span>
                <p>Adobe XD</p>
            </div>
        </Spotlight>
        <div className='project-brief' style={{ display: "flex", width: "90%", margin: "5%" }}>
            <div style={{ margin: "3%", width: "80%"}}>
                <h2 style={{ fontSize: "3em", marginTop: "0%" }}><strong>Project Brief</strong></h2>
                <span style={{ fontSize: "1.5em" }}>For this project I had to create an app that does not exist and I had freedom to choose whatever I would like. KickOff is a sports app that allows you to keep track of day to day sports. However, this app also allows you to see the location of restaurants or bars that are broadcasting the sport you are looking for. Being able to connect with the community around you is important in sports Kickoff your journey today! This was a solo project where I took care of everything.</span>
            </div>
            <img style={{ margin: "3%", width: "20%", boxShadow: "2px 2px 6px 2px #BBB" }} src="https://static.wixstatic.com/media/e645a6_55478deb69e4421681d70cfb4ac67fcb~mv2.png/v1/fill/w_984,h_984,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_55478deb69e4421681d70cfb4ac67fcb~mv2.png" alt="Kickoff App Logo"></img>
        </div>
        <div className='project-info' style={{ display: "flex", width: "90%", margin: "5%" }}>
            <div style={{ margin: "3%", width: "85%"}}>
                <h2 style={{ fontSize: "3em", marginTop: "0%" }}>User Persona</h2>
                <img style={{ margin: "5%", width: "100%", boxShadow: "2px 2px 6px 2px #BBB" }} src="https://static.wixstatic.com/media/e645a6_8e9ae848aef745ea984bed4141721c80~mv2.jpg/v1/fill/w_1498,h_1594,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_8e9ae848aef745ea984bed4141721c80~mv2.jpg" alt="Kickoff User Persona"></img>
            </div>
        </div>
        <div className='project-info' style={{ display: "flex", width: "90%", margin: "5%" }}>
            <div style={{ margin: "3%", width: "80%"}}>
                <h2 style={{ fontSize: "3em", marginTop: "0%" }}>User Flow Diagrams</h2>
                <img style={{ margin: "5%", width: "40%", boxShadow: "2px 2px 6px 2px #BBB" }} src="https://static.wixstatic.com/media/e645a6_cff1914d1b4e4189a2ea1aa61a0b3433~mv2.jpg/v1/crop/x_59,y_0,w_973,h_2044/fill/w_958,h_2011,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_cff1914d1b4e4189a2ea1aa61a0b3433~mv2.jpg" alt="Kickoff User Flow Diagram 1"></img>
                <img style={{ margin: "5%", width: "40%", verticalAlign: "top", boxShadow: "2px 2px 6px 2px #BBB" }} src="https://static.wixstatic.com/media/e645a6_9b5dc7791d474b218e6902f2fdc544d1~mv2.jpg/v1/crop/x_29,y_0,w_1091,h_2052/fill/w_968,h_1820,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_9b5dc7791d474b218e6902f2fdc544d1~mv2.jpg" alt="Kickoff User Flow Diagram 2"></img>
            </div>
        </div>
    </div>;
};

export default Kickoff;
