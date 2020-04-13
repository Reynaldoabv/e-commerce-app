import React from 'react'
import './cart-dropdown.scss'

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
// import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector.js';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} /> )
                    )) : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => { history.push('/checkout'); toggleCartHidden();}}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

// CartDropdown.propTypes = {

// }

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    
})
export default withRouter(connect(mapStateToProps, { toggleCartHidden })(CartDropdown));
