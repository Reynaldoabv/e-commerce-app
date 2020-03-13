import React from 'react';
// import PropTypes from 'prop-types';

import SHOP_DATA from './Shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

const ShopPage = props => {

    const collections = SHOP_DATA;

    return (
        <div className="shop-page">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} { ...otherCollectionProps } />
                ))
            }
        </div>
    )
}

// ShopPage.propTypes = {

// }

export default ShopPage;
