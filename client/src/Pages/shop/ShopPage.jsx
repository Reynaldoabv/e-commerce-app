import React, { useEffect } from 'react';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'

import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, isCollectionFetching, fetchCollectionsStartAsync }) => { 
    // const unsubscribeFromSnapshot = null;

    useEffect(() => {

        fetchCollectionsStartAsync();

    },[fetchCollectionsStartAsync])

    return (
        <div className="shop-page">
           <Route 
            exact path={`${ match.path}`} 
            render={(props) => <CollectionsOverviewWithSpinner 
            isLoading={isCollectionFetching} {...props} /> } 
           />
           <Route 
            path={`${ match.path}/:collectionId`} 
            render={(props) => <CollectionPageWithSpinner 
            isLoading={isCollectionFetching} 
            {...props} /> } 
           />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
})

export default connect(mapStateToProps, { fetchCollectionsStartAsync })(ShopPage);
