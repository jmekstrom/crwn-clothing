import React from 'react';
import { withRouter } from 'react-router-dom'; //higher order component, a fucntion that take a component as an arguement and returns a modified componenet
import './MenuItem.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    <div 
        className={`menu-item ${size}`} 
        onClick={()=>history.push(`${match.url}${linkUrl}`)}
    >
        <img className="background-image" src={imageUrl} alt={title}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem) // now MenuItem has access to location, match and history props from routing,
                                    // this prevents prop tunnelling or passing props through a parent that doesn't need it just to pass it to the child;
