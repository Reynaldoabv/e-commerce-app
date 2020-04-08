import React from 'react';
import './home-page.scss';

import Directory from '../../components/directory/Directory';

const HomePage = props => {
    return (
        <div className="container home-page mt-5">
            <Directory />
        </div>
        
    )
}

export default HomePage;
