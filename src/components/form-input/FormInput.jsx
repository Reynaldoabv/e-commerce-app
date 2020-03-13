import React from 'react';
import './form-input.scss';
// import PropTypes from 'prop-types'

const FormInput = ({ onChange, label, ...otherFormInputProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={onChange} {...otherFormInputProps } />
            {
                label ? (
                    <label className={`${otherFormInputProps.value.length ? 'shrink' : ' '} form-input-label`}>
                        {label}
                    </label>
                ) : null
            }
        </div>
    )
}

// Form-input.propTypes = {

// }

export default FormInput;
