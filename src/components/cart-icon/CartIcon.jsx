import React from 'react';
import './cart-icon.scss';

import { ReactComponent as ShoppingCart } from '../../assets/original.svg';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
// import PropTypes from 'prop-types'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingCart className="shopping-icon" />
            <div className="item-count">{itemCount}</div>
        </div>
    )
}

// CartIcon.propTypes = {

// }

const masStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})

export default connect(masStateToProps, {toggleCartHidden} )(CartIcon);
