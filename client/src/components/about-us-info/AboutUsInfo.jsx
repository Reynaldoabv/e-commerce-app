import React from 'react';
import './about-us-info.scss';

import { Link } from 'react-router-dom';

const AboutUsInfo = props => {
    return (
        <div className="about-us-info">
            <div className="about-us-text mt-4">
                <h5>We are an exciting contemporary brand which focuses on high-quality <Link to="/shop"><strong>Products</strong></Link>{' '} 
                     that fuse vintage Americana inspired graphics with a British style. They are characterised by quality 
                    fabrics, authentic vintage washes, unique detailing, world leading hand-drawn graphics and tailored 
                    fits with diverse styling. Such distinctiveness has gained the brand exclusive appeal as well as an 
                    international celebrity following.</h5><br/>
                <h5>Our brand has a significant and growing presence around Ireland, operating through 9 locations in Dublin.</h5><br/>
                <h5>The brand delivery promise is one of the best in the marketplace offering great customer service and a hassle-free 
                    returns policy.</h5><br/>
            </div>
        </div>
    )
}

export default AboutUsInfo;
