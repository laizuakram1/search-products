import { Button } from 'bootstrap';
import React, { useState } from 'react';
import './Product.css';
import ReactModals from '../../ReactModals/ReactModals';





const Product = ({image, title, price, SetCartCount, MinusCartCount}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className='product-container'>
             <img width='250px' height="60%" src={image} alt="" />
            <h2 className='mt-3'>{title}</h2>
            <h4 className='text-warning'>$$ {price}</h4>
            <button onClick={SetCartCount} className='btn btn-primary me-3'>Add cart</button>
            <button onClick={MinusCartCount} className='button btn btn-danger me-3'>Delete</button>
            <button className='button btn btn-info me-3'>Details
            </button>
            <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
            <ReactModals show = {show} setShow = {setShow}></ReactModals>
           
           
          
           
           
           
        </div>
    );
};

export default Product;