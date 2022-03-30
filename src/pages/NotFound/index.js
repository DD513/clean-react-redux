import React from "react";
import "./index.less";
import images from "../../config/images";
import { Button, Row, Col } from "antd";

function NotFoundPage() {
  return (
    <div className="NotFoundContainer">
      <Row justify="center">
        <Col xs={24} className="imgBlock">
          <img src={images.NotFound} className="NotFoundImage" />
        </Col>
        <Col xs={24} sm={6} className="buttonBlock">
          <Button ghost className="globalButton">
            回上一頁
          </Button>
        </Col>
        <Col xs={24} sm={6} className="buttonBlock">
          <Button type="dashed" ghost className="globalButton">
            回首頁
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default NotFoundPage;

// <Row justify="center">
//             <Col xs={24} sm={12}>
//               <Button ghost className="globalButton">
//                 回上一頁
//               </Button>
//             </Col>
//             <Col xs={24} sm={12}>
//               <Button type="dashed" ghost className="globalButton">
//                 回首頁
//               </Button>
//             </Col>
//           </Row>
