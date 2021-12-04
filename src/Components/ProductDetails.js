import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useParams } from 'react-router';
import axios from 'axios';

const ProductDetails = () => {
    const { name } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/home").then(response => {
            setProducts(response.data[2]);
            console.log(response.data[2]);
        }).catch(error => {
            console.log(error);
        });
    }, []);
    const selectedProduct = products.find(pd => pd.name === name);
    return (
        <div>
            <NavBar></NavBar>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>

                <div>
                    <h2>Product Details</h2>
                    <h6>Product Id: {selectedProduct?.id}</h6>
                    <h6>Product Name: {selectedProduct?.name}</h6>
                    <h6>Product Price: {selectedProduct?.price}</h6>
                    <h6>Product Quantity: {selectedProduct?.quantity}</h6>
                    <h6>Product Category: {selectedProduct?.category}</h6>
                    <h6>Product Seller Name: {selectedProduct?.sellerName}</h6>
                    <h6>Product Details: {selectedProduct?.productDetails}</h6>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;