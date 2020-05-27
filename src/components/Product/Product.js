import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
    state = {
        quantity: 1,
    }

    changeQuantity = (e) => {
        e.target.value >= 1 ? 
        this.setState({
            quantity: e.target.value
        })
        : this.setState({
            quantity: 1
        })
    }

    render(){
    return (
        <div className="product">
            <div className="product-img">
                <img src={ this.props.imgsrc } height="180px" width="200px" alt={this.props.alt} />
            </div>
            <div className="product-body">
                <p className="product-title">{this.props.product_title}</p>
                <p className="product-description">
                    {this.props.product_description}
                </p>
                <p className="product-price">Price : {this.props.product_price}</p>
                <div className="bottom">
                    <input type="number" className="quantity" key={this.props.id} value={this.state.quantity} onChange={this.changeQuantity}/>
                    <li className="product-addcart" onClick={( e ) => this.props.handler( e , this.state.quantity )} value={this.props.id}>Add to cart</li>
                </div>
            </div>
        </div>
    );
    }
};

export default Product;
