import { Component } from "react";
import { Container, Row, Spinner, Alert, Col } from "react-bootstrap";
import SingleProduct from "../../components/SingleProduct";

class ProductList extends Component {
  state = {
    loading: true,
    error: null,
    products: null,
  };

  fetchProduct = async () => {
    const API_URL = process.env.REACT_APP_BE_URL + "/products";
    console.log(API_URL);

    try {
      const res = await fetch(API_URL);

      if (res.ok) {
        const products = await res.json();
        console.log(products);
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
        <Row md={3} lg={4}>
          {loading && <Spinner animation="border" variant="success" />}

          {error && (
            <Alert variant="danger">This is a alert—check it out!</Alert>
          )}
          {products &&
            products.map((product, idx) => (
              <Col key={idx}>
                <SingleProduct product={product} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default ProductList;
