import { Component } from "react";
import { Container, Row, Spinner, Alert } from "react-bootstrap";

class ProductList extends Component {
  state = {
    loading: true,
    error: null,
    products: null,
  };

  fetchProduct = async () => {
    const API_URL = process.env.REACT_APP_BE_URL + "/products";

    try {
      const res = await fetch(API_URL);
      if (res.ok) {
        const products = await res.json();
        this.setState({ products: products, loading: false });
      }
    } catch (error) {
      this.setState({ loading: false, error: true });
    }
  };

  componentDidMount = () => {
    this.fetchProduct();
  };

  render() {
    const { loading, error, products } = this.state;
    return (
      <Container>
        <Row>
          {loading && <Spinner animation="border" variant="success" />}

          {error && (
            <Alert variant="danger">This is a alert—check it out!</Alert>
          )}
          {products &&
            products.map((product, idx) => (
              <div>{JSON.stringify(product)}</div>
            ))}
        </Row>
      </Container>
    );
  }
}

export default ProductList;
