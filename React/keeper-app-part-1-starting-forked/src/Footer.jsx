import React from "react";

const date = new Date();
let footerVariable = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright©{footerVariable}</p>
    </footer>
  );
}

export default Footer;
