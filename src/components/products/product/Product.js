import React from 'react';
import './Product.css'
const Product = (props) => {
    
    return (
        <div className='product-container'>
             <img width='260px' height="70%" src={props.image} alt="" />
            <h2 className='mt-3'>{props.title}</h2>
            <h4 className='text-warning'>$$ {props.price}</h4>
            <button className='btn btn-primary me-3'>Add cart</button>
            <button className='button btn btn-danger me-3'>Delete</button>
            <button className='button btn btn-info me-3'>Details</button>
           
        </div>
    );
};

export default Product;