import React from "react";
import "./Product.css";

const Product = (props) => {
    return (
        <div className="product">
            <div className="product-img">
                <img src={ props.imgsrc } height="180px" width="200px" alt={props.alt} />
            </div>
            <div className="product-body">
                <p className="product-title">{props.product_title}</p>
                <p className="product-description">
                    {props.product_description}
                </p>
                <p className="product-price">Price : {props.product_price}</p>
                <li className="product-addcart" onClick={props.handler} value={props.id}>Add to cart</li>
            </div>
        </div>
    );
};

export default Product;
