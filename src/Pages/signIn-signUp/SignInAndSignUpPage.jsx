import React from 'react';
import './SignInAndSignUpPage.scss';
// import PropTypes from 'prop-types'

import SignIn from '../../components/sign-in/SignIn';

const SignInAndSignUpPage = props => {
    return (
        <div>
            <h1>Sign In & Sign Up</h1>
            <SignIn />
        </div>
    )
}

// SignInAndSignUpPage.propTypes = {

// }

export default SignInAndSignUpPage;
