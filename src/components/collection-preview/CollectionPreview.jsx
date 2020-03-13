import React from 'react';
import './collection-preview.scss';
// import PropTypes from 'prop-types';

import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview mt-5">
        <h1 className="title"> { title.toUpperCase() } </h1>
        <div className="preview">
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherCollectionItemProps }) => (
                    <CollectionItem key={id} { ...otherCollectionItemProps }/>
                ))
            }
        </div>
    </div>
)


// CollectionPreview.propTypes = {

// }

export default CollectionPreview;
