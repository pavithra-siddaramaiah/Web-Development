import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [heading, setHeading] = useState("");

  function handleFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleLastName(event) {
    setLastName(event.target.value);
  }

  function handleClick(e) {
    setHeading(firstName + " " + lastName);

    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleFirstName}
          name="fName"
          placeholder="First Name"
        />
        <input onChange={handleLastName} name="lName" placeholder="Last Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
