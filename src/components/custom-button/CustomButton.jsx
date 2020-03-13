import React from 'react';
import './custom-button.scss';
// import PropTypes from 'prop-types';

const CustomButton = ({ children, isGoogleSigIn, ...otherCustomButtonProps }) => {
    return (
        <button className={`${isGoogleSigIn ? 'google-sign-in' : ''} custom-button`} {...otherCustomButtonProps }>
            { children }
        </button>
    )
}

// CustomButton.propTypes = {

// }

export default CustomButton
