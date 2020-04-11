import React from 'react';
import './checkout-page.scss';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartTotal, selectCartItems } from '../../redux/cart/cart.selector.js';

const CheckoutPage = ({ cartItems, total }) => {    
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <div className="total">
                <span>Total: ${total}</span>
            </div>
            <div className="test-warning text-center mt-5">
                <h3 className="font-weight-bold">*** Please use the following test credit card payment ***</h3>
                <br/>
                <p>N°: 4242-4242-4242-4242</p>
                <p>Exp: 01/22</p>
                <p>CVV: 123</p>
            </div>
            <StripeButton price={total} />
            <hr/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
