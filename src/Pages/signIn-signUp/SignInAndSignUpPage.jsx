import React from 'react';
import './SignInAndSignUpPage.scss';
// import PropTypes from 'prop-types'

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

const SignInAndSignUpPage = props => {
    return (
        <div className="sign-in-and-sign-up">
            {/* <h1>Sign In & Sign Up</h1> */}
            <SignIn />
            <SignUp />
        </div>
    )
}

// SignInAndSignUpPage.propTypes = {

// }

export default SignInAndSignUpPage;
