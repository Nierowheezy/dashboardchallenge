import React from "react";
import "./Activities.css";

const Activities = () => {
  return (
    <div>
      <div className="activities__card__container">
        <div className="activities__card__header">
          <h3 style={{ marginLeft: "25px", fontSize: "18px" }}>
            Recent Customer
          </h3>
          <p style={{ marginLeft: "25px", fontSize: "12px" }}>
            Most Recent List Of Customers
          </p>
        </div>

        <div className="activities__card__content">
          <h4 style={{ marginLeft: "25px" }}>Jane Doe</h4>
          <span>
            <span style={{ fontSize: "12px" }}>Janeisadoe@yahoo.com</span>
            <span style={{ fontSize: "12px" }}>07123456789</span>
            <i className="feather icon-chevron-right sidebar__chevron"></i>
          </span>
          <hr style={{ width: "90%", marginLeft: "25px", marginTop: "10px" }} />
        </div>
        <div className="activities__card__content">
          <h4 style={{ marginLeft: "25px" }}>Jane Doe</h4>
          <span>
            <span style={{ fontSize: "12px" }}>Janeisadoe@yahoo.com</span>
            <span style={{ fontSize: "12px" }}>07123456789</span>
            <i className="feather icon-chevron-right sidebar__chevron"></i>
          </span>
          <hr style={{ width: "90%", marginLeft: "25px", marginTop: "10px" }} />
        </div>
        <div className="activities__card__content">
          <h4 style={{ marginLeft: "25px" }}>Jane Doe</h4>
          <span>
            <span style={{ fontSize: "12px" }}>Janeisadoe@yahoo.com</span>
            <span style={{ fontSize: "12px" }}>07123456789</span>
            <i className="feather icon-chevron-right sidebar__chevron"></i>
          </span>
          <hr style={{ width: "90%", marginLeft: "25px", marginTop: "10px" }} />
        </div>

        <div className="activities__card__footer">
          <h5>All Customer</h5>
        </div>
      </div>
    </div>
  );
};

export default Activities;
