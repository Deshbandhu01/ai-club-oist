import './Hero.css';
import SplineScene from '../SplineScene/SplineScene';
import BackgroundVideo from '../Background/BackgroundVideo';
// import About from "../body/about/About.jsx"

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
                                <Spline scene="https://prod.spline.design/NO7MaCViktGW8AFI/scene.splinecode" />
                        </div>
                    
                    </div>
                </div>
            </div>
            {/* <About /> */}
        </>
    );
}

export default Hero;
