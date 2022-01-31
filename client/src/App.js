import React from "react";
import List from "./comp/LearnSection/List";
import Navbar from "./comp/Navbar/Navbar";
import Field from "./comp/RegexField/Field";

function App() {
  return (
    <div className="bg-dark-gray w-screen h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="h-full w-full flex flex-row overflow-hidden">
        <div className="bg-light-gray h-full w-80 py-2 px-2 overflow-scroll leftSection">
          <List></List>
        </div>
        <Field />
      </div>
    </div>
  );
}

export default App;
