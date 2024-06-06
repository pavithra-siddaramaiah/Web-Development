import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((list) => (
        <Note key={list.id} title={list.title} content={list.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
