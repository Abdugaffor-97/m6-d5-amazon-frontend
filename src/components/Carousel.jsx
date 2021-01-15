import React from "react";
const { Carousel } = require("react-bootstrap");

const images = [
  "/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
  "/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
  "/refresh-your-spase.jpg",
  "/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg",
  "/AMZ_Associates_ACC_Banner_Evergreen_1500x600_v2._CB415565312_.jpg",
];

const carousel = () => {
  return (
    <Carousel>
      {images.map((image, idx) => (
        <Carousel.Item key={idx}>
          {console.log(process.env.PUBLIC_URL + image)}
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + image}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default carousel;
