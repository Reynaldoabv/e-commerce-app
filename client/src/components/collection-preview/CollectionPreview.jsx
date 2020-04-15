import React from 'react';
import './collection-preview.scss';

import CollectionItem from '../collection-item/CollectionItem';
import { Link } from 'react-router-dom';

const CollectionPreview = ({ title, items }) => {
    console.log(title);
    return (  

        <div className="collection-preview mt-5">
            <Link to={`/shop/${title.toLowerCase()}`} className="title" > { title.toUpperCase() } </Link>
            <div className="preview">
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map( item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}


export default CollectionPreview;
