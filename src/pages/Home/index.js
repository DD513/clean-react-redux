import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Row, Col } from "antd";
import "./index.less";

function Home() {
  return (
    <Row>
      <div className="container">
        <div className="box">
          <img src={require("../../assets/images/3.jpg")} alt="spring" />
          <span>Spring</span>
        </div>
        <div className="box">
          <img src={require("../../assets/images/2.jpg")} alt="summer" />
          <span>Summer</span>
        </div>
        <div className="box">
          <img
            src={require("../../assets/images/nafinia-putra-Kwdp-0pok-I-unsplash.jpg")}
            alt="autumn"
          />
          <span>Autumn</span>
        </div>
        <div className="box">
          <img
            src={require("../../assets/images/nathan-dumlao-6VhPY27jdps-unsplash.jpg")}
            alt="winter"
          />
          <span>Winter</span>
        </div>
      </div>
    </Row>
  );
}

export default Home;
