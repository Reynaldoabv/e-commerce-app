import React from 'react';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/store.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { auth } from '../../firebase/firebase.utils';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container d-flex" to="/">
                <Logo className="logo" />
                <h2 className="ml-3">E-Commerce App</h2>
            </Link>
            <div className="options">
                <Link className="option mt-3" to="/about-us">About Us</Link>
                <Link className="option mt-3" to="/shop">Shop</Link>
                <Link className="option mt-3" to="/contact">Contact</Link>
                {
                    currentUser ? 
                    <div className="option mt-3" onClick={() => auth.signOut()}>Sign Out</div> : 
                    <Link className="option mt-3" to="/signin">Sign In</Link>
                }
                <CartIcon />
            </div>
            { !hidden ? <CartDropdown /> : null }
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
