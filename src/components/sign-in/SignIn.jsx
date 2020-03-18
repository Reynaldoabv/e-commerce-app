import React, { useState } from 'react';
import './SignIn.scss';
// import PropTypes from 'prop-types'

import FormInput from '../../components/form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = props => {

    const [formData, setFormData ] = useState({
        email: "",
        password: ""
    });

    const onSubmit = e => {
        e.preventDefault()

        console.log(formData)

        setFormData({ email: "", password: "" });
    }

    const onChange = e => {
        const { value, name } = e.target;

        setFormData({ ...formData, [name]: value })
    }

    const { email, password } = formData;

    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={onSubmit}>
                <FormInput 
                    type="email" 
                    name="email" 
                    onChange={onChange} 
                    value={email} 
                    label="Email" 
                />
                <FormInput 
                    type="password" 
                    name="password" 
                    onChange={onChange} 
                    value={password} 
                    label="Password" 
                />
                <div className="buttons">
                    <CustomButton type="submit"> Sign In </CustomButton> 
                    <CustomButton onClick={signInWithGoogle} isGoogleSigIn > Sign In With Google</CustomButton> 
                </div>
            </form>
        </div>
    )
}

// SignIn.propTypes = {

// }

export default SignIn
