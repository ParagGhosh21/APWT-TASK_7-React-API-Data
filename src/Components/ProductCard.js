import React from 'react';
import { useHistory } from 'react-router';

const ProductCard = (props) => {
    const { name, price } = props.product;
    const history = useHistory();
    const handelClick = (id) => {
        const url = `/productDetails/${name}`;
        history.push(url);
    }

    return (
        <div className="col-3" style={{ minHeight: "70vh" }}>
            <div className="card-group">
                <div className="card">
                    <img src="https://www.mobiledokan.com/wp-content/uploads/2021/08/Xiaomi-Poco-M3-Pro-5G-image.jpg" height="300" width="200" alt="" className="card-img-top" />
                    <div class="card-body">
                        <div class="d-flex">
                            <h5 class="card-title text-primary">{name}</h5>
                            <p class="card-text ms-auto"><small class="text-danger fw-bold">Price:
                                {price}</small></p>
                        </div>
                        <span></span>
                        <div class="d-flex">
                        </div>
                        <div class="d-flex">
                            <div class="ms-auto">
                                <button className="btn btn-sm btn-primary mt-4" onClick={() => handelClick(name)}>Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;