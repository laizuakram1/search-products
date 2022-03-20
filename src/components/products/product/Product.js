
import React from 'react';
import './Product.css';
import ReactModals from '../../ReactModals/ReactModals';



const Product = ({image, title, price, SetCartCount, MinusCartCount}) => {

    return (
        <div className='product-container'>
             <img width='250px' height="60%" src={image} alt="" />
            <h2 className='mt-3'>{title}</h2>
            <h4 className='text-warning'>$$ {price}</h4>
            <button onClick={SetCartCount} className='btn btn-primary me-3'>Add cart</button>
            <button onClick={MinusCartCount} className='button btn btn-danger me-3'>Delete</button>
            {/* <button className='button btn btn-info me-3'>Details
            </button> */}
            <ReactModals image = {image} title = {title}></ReactModals>

        </div>
    );
};

export default Product;