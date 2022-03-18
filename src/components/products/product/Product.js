import React from 'react';

const Product = (props) => {
    
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>Price: {props.price}</h3>
            <img src={props.image} alt="" />
        </div>
    );
};

export default Product;