import React from "react";
import { loremIpsum } from "react-lorem-ipsum";
let informations = require("./information.json");

export default function List() {
  let informationList = [];

  function addInfo() {
    console.log(informations.information.section);
    for (let i = 0; i < 100; i++) {
      informationList.push("loremIpsum()");
    }
    //<div key={i} className="bg-gray p-4 rounded-md text-white flex w-max grow">{e.title}</div>
    return informations.information.section.map((e, i) => (
      <div key={i} className="p-4 rounded-md text-black font-bold text-xl flex w-max grow">{e.title}</div>
    ))
  }

  return (
    <div className="flex flex-col gap-2">
      {addInfo()}
    </div>
  );
}
