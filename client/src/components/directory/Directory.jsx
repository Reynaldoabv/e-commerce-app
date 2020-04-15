import React from 'react';
import './directory.scss';

import Banner from '../../assets/option_6.jpg';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/MenuItem';

const DirectoryMenu = ({ sections }) => {
    
    return (
        <div className="directory-menu">
            <div className="row">
                <div className="col-12">
                    <div className="banner">
                        <img className="img-fluid" src={Banner} alt="banner-sales"/>
                    </div>
                </div>
            </div>
            {/* <Row>
                <Col xs={12} >
                    <Image src={Banner} />
                </Col>
            </Row> */}
            {
                sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps }/>
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);
