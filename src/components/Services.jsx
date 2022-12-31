import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.jpg";
 

const Services = () => {
  return (
    <div >
      <Carousel infiniteLoop autoPlay showStatus={false}>
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full stack</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer to peer support </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
