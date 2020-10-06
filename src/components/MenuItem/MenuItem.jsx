import React from 'react';
import './MenuItem.scss';

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`menu-item ${size}`}>
        <img className="background-image" src={imageUrl} alt={title}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;
