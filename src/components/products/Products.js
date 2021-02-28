import React, { Component } from "react";
import { Card, Button, Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchProducts, addProduct } from "../../actions";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  addToCart = (item) => {
    this.props.addProduct(item);
  };

  render() {
    console.log(this.props);
    const { products } = this.props;

    const ProductList = products.map((product) => (
      <Col md="3" key={product.id} className="card-products">
        <Card>
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "253px", height: "150px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title as={Link} to={`/products/${product.id}`}>
              {product.name}
            </Card.Title>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              variant="primary"
              onClick={() => this.addToCart({ ...product, count: 1 })}
            >
              Add to cart
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    ));

    return (
      <div>
        <hr />
        <Container>
          <Row>{ProductList}</Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("hey", state);
  return {
    products: Object.values(state.products),
  };
};

export default connect(mapStateToProps, { fetchProducts, addProduct })(
  Products
);
