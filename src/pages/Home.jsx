import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carausel from "../components/Carousel";
import CategoryCart from "../components/CategoryCart";

const categories = [
  {
    img: "/amazonbasics_520x520._SY304_CB442725065_.jpg",
    name: "AmazonBasics",
  },
  {
    img: "/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
    name: "Electronics",
  },
  {
    img: "/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg",
    name: "Computers & Accessories",
  },
  { img: "/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg", name: "Beauty picks" },
  {
    img: "/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg",
    name: "Shop Laptops & Tablets",
  },
  {
    img: "/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg",
    name: "Explore home bedding",
  },
];

class Home extends Component {
  render() {
    return (
      <div>
        <Carausel />

        <Container>
          <div>
            <Row sm={1} md={2} lg={3} xl={4}>
              {categories.map((category, idx) => (
                <Col className="mx-2 my-4" key={idx}>
                  <CategoryCart category={category} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
