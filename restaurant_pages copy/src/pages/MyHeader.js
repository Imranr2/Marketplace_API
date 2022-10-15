import React from "react";

function MyHeader(props) {
  return (
    <div className="header-container">
      <h2>{props.headerText}</h2>
      <div className="header-horizontal-line"></div>
    </div>
  );
}

export default MyHeader;
