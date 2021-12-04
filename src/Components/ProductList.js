import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/home").then(response => {
            setProducts(response.data[2]);
            console.log(response.data[2]);
        }).catch(error => {
            console.log(error);
        });
    }, []);
   
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
            <h2 className="my-4 text-center">Product List</h2>
                <div className="row">
                    {
                        products.map(product => <ProductCard product={product}></ProductCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductList;