import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                //everytime the component is rendered this function will run, which can become a performance concern
                items
                .filter((item,i) => i < 4)
                .map(({id,...otherItemStuff})=> (
                    <CollectionItem key={id} {...otherItemStuff} />
                ))
            }
        </div>
    </div> 
);

export default CollectionPreview; 