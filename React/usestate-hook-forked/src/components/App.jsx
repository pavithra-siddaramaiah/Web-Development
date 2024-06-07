import React, { useState } from "react";

// function increase() {
//   // const [count, setCount] = React.useState(0);
// }

// function setCount() {
//   // return count + 1;
// }

function App() {
  const [count, setCount] = useState(0);

  // console.log(count);

  function increase() {
    setCount(count + 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
