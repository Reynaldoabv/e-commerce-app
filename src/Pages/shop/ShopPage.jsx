import React from 'react';

import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';

const ShopPage = ({ match }) => { 

    console.log("ShopPage", match)

    return (
        <div className="shop-page">
           <Route exact path={`${ match.path}`} component={CollectionOverview} />
           <Route path={`${ match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage;
