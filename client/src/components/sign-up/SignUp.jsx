import React, { useState } from 'react';
import './sign-up.scss';
// import PropTypes from 'prop-types'

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = props => {

    const [ formData, setFormData ] = useState({
        displayName: "",
        email: "", 
        password: "", 
        confirmPassword: ""
    })

    const onChange = e => {
        const { value, name } = e.target;

        setFormData({ ...formData, [name]: value })
    }

    const onSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = formData;

        if(password !== confirmPassword) {
            alert("Passwords do not match");

            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName })

            setFormData({
                displayName: "",
                email: "", 
                password: "", 
                confirmPassword: ""
            })

        } catch (err) {
            console.error(err)
        }

    }

    const { displayName, email, password, confirmPassword } = formData;

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={onSubmit}>
                <FormInput 
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={onChange}
                    label="Display name"
                    required
                />
                <FormInput 
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    label="Email"
                    required
                />
                <FormInput 
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    label="Enter your password"
                    required
                />
                <FormInput 
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onChange}
                    label="Please confirm your password"
                    required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    )
}

// SignUp.propTypes = {

// }

export default SignUp;
