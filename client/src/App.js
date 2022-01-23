import React from "react";
import Navbar from "./comp/Navbar/Navbar";
import Field from "./comp/RegexField/Field";

function App() {
  return (
    <div className="bg-dark-gray w-screen h-screen flex flex-col">
      <Navbar />
      <div className="h-full w-full flex flex-row">
        <div className="bg-light-gray h-full w-80 p-4">
          <div className="bg-custom-blue h-16 w-4 relative top-1/2 left-full ml-2 hover:cursor-pointer"></div>
        </div>
        <Field />
      </div>
    </div>
  );
}

export default App;
