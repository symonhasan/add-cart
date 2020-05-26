import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Product from "./components/Product/Product";
import { Container, Row, Col } from "react-bootstrap";
import "./bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

class App extends Component {
    linkList = [
        {
            title: "Products",
            route: "/"
        },
        {
            title: "Cart",
            route: "/cart"
        }
    ];

    state = {
        productList: [],
    };

    componentWillMount() {
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

    renderProduct = () => {
        return this.state.productList.map((product, index) => {
            return (
                <Col sm={4} xs={6} key={index}>
                    <div className="products">
                        <Product
                            imgsrc={product.img}
                            alt={product.alt}
                            product_title={product.title}
                            product_description={product.desc}
                            product_price={product.price}
                        />
                    </div>
                </Col>
            );
        });
    };

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navigation title="Add To Cart" links={this.linkList} />

                    <Route
                        path="/" exact
                        render={() => {
                            return (
                                <Container>
                                    <Row>{this.renderProduct()}</Row>
                                </Container>
                            );
                        }}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
