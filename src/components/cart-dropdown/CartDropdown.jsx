import React from 'react'
import './cart-dropdown.scss'

import CustomButton from '../custom-button/CustomButton';
// import PropTypes from 'prop-types'

const CartDropdown = props => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButton >GO TO CHECKOUT</CustomButton>
        </div>
    )
}

// CartDropdown.propTypes = {

// }

export default CartDropdown;
