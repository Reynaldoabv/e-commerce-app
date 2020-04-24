import React from 'react';
import './about-us-page.scss';

import AboutUsInfo from '../../components/about-us-info/AboutUsInfo';
import CarouselComponent from '../../components/carousel/CarouselComponent';

const AboutUsPage = props => {
    return (
        <div className="about-us-page">
            <h2 className="text-center mb-5">ABOUT US</h2>
            <div className="row">
                <div className="col-9 mx-auto">
                    <CarouselComponent />
                </div>
                <div className="col-9 mx-auto">
                    <AboutUsInfo />
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage;
