import './Hero.css';
import SplineScene from '../SplineScene/SplineScene';
import BackgroundVideo from '../Background/BackgroundVideo';
// import About from "../body/about/About.jsx"
import { Link } from 'react-router-dom';

import Spline from '@splinetool/react-spline';
function Hero() {
    return (
        <>
            <div className="Home_container">
                <div className="home_la">
                    <div className="my-first-div">
                        <BackgroundVideo />
                    </div>
                    <div className="content_hero">
                        <div className="fig">
                            <h1>Join the revolution with AI Club <p>(<b>Oriental Institute of Science and Technology, Bhopal</b>)</p></h1>
                        </div>
                        
                        <div className="spline-scene box">
                                {/* <Spline scene="https://prod.spline.design/NO7MaCViktGW8AFI/scene.splinecode" /> */}
                                {/* <div className="slogan">
                                    <p>Discover the exciting world of Artificial Intelligence at OIST. We're a community of learners, innovators, and enthusiasts exploring the frontiers of AI and machine learning.</p>
                                    <div className='butt11'>
                                    <Link to="contact">
                                        <button className='btnj'>Join_the_Club</button>
                                    </Link>
                                    <Link to="contact">
                                        <button className='btnj'>Explore</button>
                                    </Link>
                                    </div>
                                    
                                </div> */}
                        </div>
                    
                    </div>
                </div>
            </div>
            {/* <About /> */}
        </>
    );
}

export default Hero;
