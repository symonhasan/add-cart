import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Product from "./components/Product/Product";
import { Container, Row, Col } from "react-bootstrap";
import "./bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";

class App extends Component {
    linkList = [
        {
            title: "Products",
            route: "/",
        },
        {
            title: "Cart",
            route: "/cart",
        },
    ];

    state = {
        productList: [],
        cart: [],
        totalAmount: 0,
    };

    UNSAFE_componentWillMount() {
        fetch("http://localhost:8080/")
            .then((res) => {
                return res.json();
            })
            .then((resData) => {
                this.setState({
                    productList: [...resData],
                });
            })
            .catch((err) => {});
    }

    addCartBtnHandler = (e) => {
        fetch("http://localhost:8080/add-cart", {
            method: "POST",
            body: JSON.stringify({
                id: e.target.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((resData) => {
                // console.log( resData )
                const prevCart = this.state.cart;
                this.setState({
                    cart: [...prevCart, resData],
                });
                const prevTotal = this.state.totalAmount;
                this.setState({
                    totalAmount: prevTotal + resData.price,
                });
                // console.log(this.state.cart);
            })
            .catch((err) => {});
    };

    renderProduct = () => {
        return this.state.productList.map((product, index) => {
            return (
                <Col sm={3} xs={6} key={index}>
                    <div className="products">
                        <Product
                            id={product.id}
                            imgsrc={product.img}
                            alt={product.alt}
                            product_title={product.title}
                            product_description={product.desc}
                            product_price={product.price}
                            handler={this.addCartBtnHandler}
                        />
                    </div>
                </Col>
            );
        });
    };

    emptyCart = () => {
        this.setState({
            cart: [],
            totalAmount: 0
        })
    } 

    deleteCartProduct = (e) => {
        const index = e.target.value;
        const cartList = this.state.cart;
        let amount = cartList[ index ].price;
        // console.log( amount );
        const currentTotal = this.state.totalAmount;
        cartList.splice( index , 1);
        this.setState({
            cart: [...cartList],
            totalAmount: currentTotal - amount
        }
        )
    }

    placeOrder = () => {

    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navigation title="Add To Cart" links={this.linkList} />

                    <Route
                        path="/"
                        exact
                        render={() => {
                            return (
                                <Container>
                                    <h3>Products</h3>
                                    <Row>{this.renderProduct()}</Row>
                                </Container>
                            );
                        }}
                    />
                    <Route
                        path="/cart"
                        exact
                        render={() => {
                            return (
                                <Cart
                                    cartlist={this.state.cart}
                                    total={this.state.totalAmount}
                                    del={this.deleteCartProduct}
                                    place={this.placeOrder}
                                    emptycart={this.emptyCart}
                                />
                            );
                        }}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
