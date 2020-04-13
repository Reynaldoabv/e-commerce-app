import React from 'react';
import './contact.scss';

import GoogleMaps from '../../components/google-maps/GoogleMaps';

const Contact = props => {
    return (
        <div className="contact-page">
            <h2 className="text-center">Contact</h2>
            <GoogleMaps />
            <hr/>
        </div>
    )
}

export default Contact;
