import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const enteredName = event.target.name;
    const enteredValue = event.target.value;

    setContact((prevValue) => {
      if (enteredName === "fName") {
        return {
          fName: enteredValue,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      } else if (enteredName === "lName") {
        return {
          fName: prevValue.fName,
          lName: enteredValue,
          email: prevValue.email,
        };
      } else if (enteredName === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: enteredValue,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
