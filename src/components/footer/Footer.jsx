import React from 'react';
import './footer.scss';

import { ReactComponent as Logo } from '../../assets/LogoT2.svg';

import { Link } from 'react-router-dom';

const Footer = props => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-4">
                    <div className="d-flex">
                        <h2 className="mx-auto my-auto">PURCHASE</h2>
                    </div>
                    <div className="text-center">
                        <Link to='/our-stores'><p className="links">Our stores</p></Link>
                        <Link to='return-and-exchanges'><p className="links">Return & Exchanges</p></Link>
                    </div>
                </div>
                <div className="col-4">                
                    <div className="d-flex">
                        <h2 className="mx-auto my-auto">HELP</h2>
                    </div>
                    <div className="text-center">
                        <Link to='/warranty'><p className="links">Warranty</p></Link>
                        <Link to='terms-and-conditions'><p className="links">Terms & Conditions</p></Link>
                    </div>
                    <div className="text-center lines">
                        <div className="text-center">
                            <Logo alt="logo-RB" className="logo" />
                        </div>
                        Front-End Developer<br />
                        &copy;2020 Reynaldo Borges<br />
                        All rights reserved
                    </div>                   
                </div>
                <div className="col-4">
                    <div className="d-flex">
                        <h2 className="mx-auto my-auto">CONTACT</h2>
                    </div>
                    <div className="text-center">
                        <Link to='/contact'><p className="links">Contact</p></Link>
                        <p>Adderess<br />
                        Dublin 8, Ireland</p>
                        <p>Call Center<br />
                        +353 (1)960 91 95</p>
                        <p>Hours<br />
                        Monday to Friday 8:00-18:00 / Saturday 8:00-17:30</p>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Footer
