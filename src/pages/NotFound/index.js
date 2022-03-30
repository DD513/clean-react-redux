import React from "react";
import "./index.less";
import images from "../../config/images";

function NotFoundPage() {
  return (
    <div className="NotFoundContainer">
      <div className="body">
        <img src={images.NotFound} className="NotFoundImage" />
      </div>
    </div>
  );
}

export default NotFoundPage;
