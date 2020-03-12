import React from 'react';
import './menu-item.scss';
import PropTypes from 'prop-types';

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div style={{ backgroundImage: `url(${imageUrl})`}} className="background-image" />
            <div className="content">
                <h1 className="title">{ title.toUpperCase() }</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

MenuItem.propTypes = {

}

export default MenuItem;
