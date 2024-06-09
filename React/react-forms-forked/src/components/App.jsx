import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function handleChange(event) {
    // console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <form onClick={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
//we have removed the onClick event here and added the onSubmit next to form, which do the same; and preventDefault is added to keep the event vanishing immediately. remoce that check to view thw differencr
