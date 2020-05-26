import React from "react";
import "./Cart.css";

const CartRow = (props) => {
    return props.cartlist.map((product, index) => {
        return (
            <div className="cart-row" key={index}>
                <div>
                    <p>{index + 1}</p>
                </div>
                <div>
                    <img
                        src={product.img}
                        height="50px"
                        width="50px"
                        alt={product.alt}
                    />
                </div>
                <div>
                    <p>{product.title}</p>
                </div>
                <div>
                    <p>1</p>
                </div>
                <div>
                    <p>{product.price}</p>
                </div>
                <div>
                    <button value={index} onClick={props.del}>Delete</button>
                </div>
            </div>
        );
    });
};

const renderCart = ( props) => {
    return (
        <div className="cart">
            <div className="cart-body">
                <div className="header">
                    <div>
                        <p>Sl No</p>
                    </div>
                    <div>
                        <p>Product Image</p>
                    </div>
                    <div>
                        <p>Product Title</p>
                    </div>
                    <div>
                        <p>Quantity</p>
                    </div>
                    <div>
                        <p>Price</p>
                    </div>
                    <div>
                        <p>Action</p>
                    </div>
                </div>
                <CartRow cartlist={props.cartlist} del={props.del} />
            </div>
            <div className="total">
                <h5>Total Amount To Be Paid </h5>
    <h4>{props.total} TK</h4>
            </div>
            <button className="order-btn">Place Order</button>
        </div>
    );
};
const renderCartEmpty = () => {
    return(
        <div className="empty-cart">
            <h4>Cart Empty!</h4>
        </div>
    )
}

const Cart = (props) => {
    return (
        <div className="cart">
            <div className="top">
                <h3>Your Cart</h3>
                <li>Reset</li>
            </div>
            {props.cartlist.length ? renderCart( props ) : renderCartEmpty()}
        </div>
    );
};

export default Cart;
