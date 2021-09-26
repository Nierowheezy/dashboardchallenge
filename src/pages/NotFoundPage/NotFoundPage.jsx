import React from "react";
import notfound from "../../assets/notfound.png";
import "./NotFoundPage.scss";

const NotFoundPage = ({ history }) => {
  return (
    <div className="notfound">
      <div>
        <img src={notfound} alt="" style={{ width: "200px" }} />
        <span>
          The link you clicked on may be broken or the page may have been
          removed or renamed
        </span>
        <div onClick={history.goBack}>
          <i className="feather icon-corner-down-left" />
          Go Back
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
