import React from "react";
import emojipedia from "../emojipedia";
import List from "./List";

function Listdetails(list) {
  return (
    <List
      key={list.id}
      name={list.name}
      emoji={list.emoji}
      meaning={list.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(Listdetails)}

        {/* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {emojipedia[1].emoji}
            </span>
            <span>{emojipedia[1].name}</span>
          </dt>
          <dd>{emojipedia[1].meaning}</dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {emojipedia[2].emoji}
            </span>
            <span>{emojipedia[2].name}</span>
          </dt>
          <dd>{emojipedia[2].meaning}</dd>
        </div> */}
      </dl>
    </div>
  );
}

export default App;
