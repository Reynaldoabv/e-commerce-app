import React, { useEffect } from 'react';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions.js';

import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const ShopPage = ({ match, updateCollections }) => { 

    const unsubscribeFromSnapshot = null;

    useEffect(() => {

        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collectionMaps = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMaps);
        })

    },[])

    return (
        <div className="shop-page">
           <Route exact path={`${ match.path}`} component={CollectionOverview} />
           <Route path={`${ match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default connect(null, { updateCollections })(ShopPage);
