import React from 'react';
import './home.scss';
import PropTypes from 'prop-types';

import Directory from '../../components/directory/Directory';

const Home = props => {
    return (
        <div className="container home-page">
            <Directory />
        </div>
        
    )
}

Home.propTypes = {

}

export default Home;
