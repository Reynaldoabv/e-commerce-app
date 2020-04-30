import React, { useState } from 'react';
import './SignIn.scss';

import FormInput from '../../components/form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = props => {

    const [formData, setFormData ] = useState({
        email: "",
        password: ""
    });

    const onSubmit = async e => {
        e.preventDefault()

        try {
            auth.signInWithEmailAndPassword(email, password);

            setFormData({ email: "", password: "" });

        } catch (err) {
            console.log(err);
        }
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

export default SignIn
