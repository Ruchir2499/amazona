import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchProduct, addProduct } from "../../actions";

import { Card, Button, Container } from "react-bootstrap";

class Product extends Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  addToCart = (item) => {
    this.props.addProduct(item);
  };

  render() {
    const { product } = this.props;

    if (!product) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Container>
          <Card key={product.id} style={{ width: "15rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
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
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { product: state.products[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchProduct, addProduct })(Product);
