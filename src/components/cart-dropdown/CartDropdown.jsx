import React from 'react'
import './cart-dropdown.scss'

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
// import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector.js';

const CartDropdown = ({ cartItems }) => {

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (
                        <CartItem id={cartItem.id} item={cartItem} />
                    ))
                }
            </div>
            <CustomButton >GO TO CHECKOUT</CustomButton>
        </div>
    )
}

// CartDropdown.propTypes = {

// }

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropdown);
