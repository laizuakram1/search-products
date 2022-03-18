import React, { useEffect, useState } from 'react';
import Product from './product/Product';
import './Products.css'
const Products = ({SetCartCount, MinusCartCount}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h2>All products</h2>
            <div className='products-container'>
            {
                products.map(product => <Product
                     image = {product.image}
                     title = {product.title.slice(0, 10)}
                     price = {product.price}
                    SetCartCount = {SetCartCount}
                    MinusCartCount = {MinusCartCount}
                     key = {product.id}
                ></Product>)
            }
            </div>
            
        </div>
    );
};

export default Products;