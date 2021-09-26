import React from "react";

const Card = ({ cards }) => {
  return (
    <>
      <div className="card">
        <div className="card_inner">
          <i
            class="fa fa-circle"
            style={{ color: "#1EB2A640", fontSize: "40px" }}
          ></i>
          <h4
            className="font-bold text-title"
            style={{ marginLeft: "10px", color: "#000000" }}
          >
            {cards.count}
          </h4>
        </div>
        <p className="text-primary-p" style={{ marginLeft: "45px" }}>
          {cards.details}
        </p>
      </div>
    </>
  );
};

export default Card;
