import React from "react";

const date = new Date();
let footerVariable = date.getFullYear();

function footer() {
  return <p>Copyright {footerVariable}</p>;
}

export default footer;
