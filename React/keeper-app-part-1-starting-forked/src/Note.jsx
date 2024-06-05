import React from "react";
import Header from "./Header";

function Note() {
  return (
    <div>
      <Header />
      <div className="note">
        <p>This is the not title</p>
        <p>This is teh note content</p>
      </div>
    </div>
  );
}

export default Note;
