import React from 'react';
import './collection-item.scss';
// import PropTypes from 'prop-types'

const CollectionItem = ({ price, name, imageUrl, id }) => {
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

// CollectionItem.propTypes = {

// }

export default CollectionItem;
