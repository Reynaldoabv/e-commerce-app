import React from 'react';
import './directory.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/MenuItem';

const DirectoryMenu = ({ sections }) => {
    
    return (
        <div className="directory-menu">
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