import React, { useEffect, useState } from 'react';
import Product from './product/Product';
const Products = () => {
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
                     title = {product.title}
                     price = {product.price}

                     key = {product.id}
                ></Product>)
            }
            </div>
            
        </div>
    );
};

export default Products;