import React from "react";
import List from "./comp/LearnSection/List";
import Navbar from "./comp/Navbar/Navbar";
import Field from "./comp/RegexField/Field";

function App() {
  let mouseDownBol = false;
  function onMDown(e) {
    console.log(e);
    let resizeListDiv = e.target.parentNode.parentNode.firstChild;

    let pos = window.event;

    var mouseX = pos.clientX;
    //var mouseY = pos.clientY;

    //console.log(mouseX, mouseY);
    mouseDownBol = true;
    //console.log(mouseDownBol);

    document.addEventListener(
      "mousemove",
      (e) => {
        const dx = mouseX - e.x;
        console.log(getComputedStyle(resizeListDiv, "").width);

        resizeListDiv.style.width =
          parseInt(getComputedStyle(resizeListDiv, "").width) +
          mouseX -
          dx +
          "px";
      },
      false
    );
  }

  return (
    <div className="bg-dark-gray w-screen h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="h-full w-full flex flex-row overflow-hidden">
        <div className="bg-light-gray h-full w-1/3 py-2 px-4 pb-4 overflow-scroll">
          <List></List>
        </div>
        <div className="h-full flex items-center">
          <div
            onMouseDown={onMDown}
            className="bg-gray border-r-2 border-t-2 border-b-2 border-custom-blue w-6 h-16 rounded-r-md cursor-ew-resize hover:bg-custom-blue"
          />
        </div>
        <Field />
      </div>
    </div>
  );
}

export default App;
