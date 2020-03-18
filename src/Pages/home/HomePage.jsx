import React from 'react';
import './home-page.scss';
// import PropTypes from 'prop-types';

import Directory from '../../components/directory/Directory';

const HomePage = props => {
    return (
        <div className="container home-page mt-5">
            <Directory />
        </div>
        
    )
}

// HomePage.propTypes = {

// }

export default HomePage;