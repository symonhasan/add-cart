import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Product from "./components/Product/Product";
import { Container, Row, Col } from "react-bootstrap";
import './bootstrap.min.css';

function App() {
    const linkList = [
        {
            title: "Github",
        },
        {
            title: "Cart",
        },
    ];

    return (
        <div className="App">
            <Navigation title="Add To Cart" links={linkList} />
            <Container>
                <Row>
                    <Col sm={4} xs={6}>
                        <div className="products">
                            <Product
                                imgsrc=""
                                alt=""
                                product_title="First Product"
                                product_description="lorem ipsum dolar lorem is"
                                product_price="100"
                            />
                        </div>
                    </Col>
					<Col sm={4} xs={6}>
                        <div className="products">
                            <Product
                                imgsrc=""
                                alt=""
                                product_title="Second Product"
                                product_description="lorem ipsum dolar lorem is"
                                product_price="200"
                            />
                        </div>
                    </Col>
					<Col sm={4} xs={6}>
                        <div className="products">
                            <Product
                                imgsrc=""
                                alt=""
                                product_title="Third Product"
                                product_description="lorem ipsum dolar lorem is"
                                product_price="300"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
