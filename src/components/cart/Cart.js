import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button, Col } from "react-bootstrap";

import { deleteProduct } from "../../actions";

class Cart extends Component {
  deleteFromCart = (id) => {
    this.props.deleteProduct(id);
  };

  render() {
    const { cart } = this.props;
    console.log("kart", cart);
    const products = cart.map((product) => (
      <Col md="3" key={product.id}>
        <Card>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>Price:${product.price}</Card.Text>
            <Card.Text>Count:{product.count}</Card.Text>
            <Card.Text>Total:$ {product.price * product.count}</Card.Text>
            <Button
              variant="primary"
              onClick={() => this.deleteFromCart(product.id)}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));
    return (
      <div>
        <h1>Cart</h1>
        {products}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(("cartx", state.cart));
  return { cart: state.cart };
};

export default connect(mapStateToProps, { deleteProduct })(Cart);
