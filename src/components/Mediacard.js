import React from 'react';
import './Mediacard.css';

const Mediacard = ({img }) => {
    return (
        <div className="Mediacard">
            <img src={img} alt=""/>
        </div>
        
    );
}

export default Mediacard;