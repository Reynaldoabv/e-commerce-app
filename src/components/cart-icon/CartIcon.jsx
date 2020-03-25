import React from 'react';
import './cart-icon.scss';

import { ReactComponent as ShoppingCart } from '../../assets/original.svg';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
// import PropTypes from 'prop-types'

const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingCart className="shopping-icon" />
            <div className="item-count">0</div>
        </div>
    )
}

// CartIcon.propTypes = {

// }

export default connect(null, {toggleCartHidden} )(CartIcon);
