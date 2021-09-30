import React from 'react';
import './Intro.css';
import Image from './intro-image.png';
import WavyBackground from './WavyBackground';

const Intro = () => {
    return (
        <div id="home" className="intro-section">
            <div className="container">
                <div className="row align-items-center text-white">
                    <div className="col-md-6 intros">
                        <h1 className="display-2">
                            <span className="display-2--intro">A Simple Way to Get Loan to Finance Your Business Today</span>
                            <span className="display-2--description lh-base mt-4">Find the best loans at the best rate for all your needs. <br />Join us now at Camdad. </span>
                        </h1>
                        <div className="intro-btn">
                        <button type="button" className="btn-text">Get Started</button>
                        </div>
                    </div>
                    <div className="col-md-6 intros hero-img">
                        <img src={Image} alt="intro" className="image-fluid" />
                    </div>
                </div>
            </div>
            <WavyBackground />
        </div>
    )
}

export default Intro;
