import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/Carousel.css";

function CarouselComp() {
  return (
    <Carousel
      autoPlay
      axis="horizontal"
      showArrows={true}
      infiniteLoop={true}
      interval={5000}
      showThumbs={false}
    >
      <div>
        <img src={require("../assets/amazon_background_image.jpg")} alt="" />
      </div>
      <div>
        <img src={require("../assets/amazon1.jpg")} alt="" />
      </div>
      <div>
        <img src={require("../assets/amazon2.jpg")} alt="" />
      </div>
      <div>
        <img src={require("../assets/amazon3.jpg")} alt="" />
      </div>
      <div>
        <img src={require("../assets/amazon4.jpg")} alt="" />
      </div>
    </Carousel>
  );
}

export default CarouselComp;
