import React from 'react';
import './header.scss';
// import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../assets/store.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { auth } from '../../firebase/firebase.utils';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container d-flex" to="/">
                <Logo className="logo" />
                <h2 className="ml-3">E-Commerce App</h2>
            </Link>
            <div className="options">
                <Link className="option mt-3" to="/shop">Shop</Link>
                <Link className="option mt-3" to="/shop/contact">Contact</Link>
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

// Header.propTypes = {
//     currentUser: PropTypes.object.isRequired
// }

const mapStateToProps = ({ user: { currentUser}, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
