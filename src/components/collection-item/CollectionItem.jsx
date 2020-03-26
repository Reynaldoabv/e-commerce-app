import React from 'react';
import './collection-item.scss';
// import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/CustomButton';

const CollectionItem = ({ addItem, item }) => {

    const { price, name, imageUrl } = item;
    
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
        </div>
    )
}

// CollectionItem.propTypes = {

// }

export default connect(null, {addItem})(CollectionItem);
