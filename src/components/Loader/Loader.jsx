import React from "react";

const Loader = (props) => {
  return (
    <div className="loader-box">
      <div className="slick-loader"></div>
      <p className="loader-text">{props.message || `Loading Please Wait..`}</p>
    </div>
  );
};

export default Loader;
