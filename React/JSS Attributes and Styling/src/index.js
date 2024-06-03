import React from "react";
import ReactDOM from "react-dom";

const image =
  "https://hips.hearstapps.com/hmg-prod/images/lily-of-the-valley-1613420289.jpg?crop=1xw:1xh;center,top&resize=980:*";

ReactDOM.render(
  <div>
    <h1 className="heading" contenteditable="true">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="image-size"
        src="https://hips.hearstapps.com/hmg-prod/images/grape-hyacinth-1613418212.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
      />
      <img
        className="image-size"
        src="https://hips.hearstapps.com/hmg-prod/images/daffodil-1613417598.jpg?crop=0.9983510011778564xw:1xh;center,top&resize=980:*"
      />
      <img
        className="image-size"
        src="https://hips.hearstapps.com/hmg-prod/images/lily-of-the-valley-1613420289.jpg?crop=1xw:1xh;center,top&resize=980:*"
      />
      <img src={image} />
    </div>
  </div>,
  document.getElementById("root")
);
