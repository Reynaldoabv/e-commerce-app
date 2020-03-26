import React from 'react';
import './custom-button.scss';
// import PropTypes from 'prop-types';

const CustomButton = ({ children, isGoogleSigIn, inverted, ...otherCustomButtonProps }) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSigIn ? 'google-sign-in' : ''} custom-button`} {...otherCustomButtonProps }>
            { children }
        </button>
    )
}

// CustomButton.propTypes = {

// }

export default CustomButton
