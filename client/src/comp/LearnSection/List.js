import React from "react";
import { loremIpsum } from "react-lorem-ipsum";
let informations = require("./information.json");

export default function List() {
  let informationList = [];

  function addSection() {
    //console.log(informations.information.section);
    for (let i = 0; i < 100; i++) {
      informationList.push("loremIpsum()");
    }
    return informations.information.section.map((e, i) => (
      <div key={i}>
        <p className="py-4 rounded-md text-black font-bold text-2xl flex w-max grow">
          {e.title}
        </p>
        <div className="flex flex-col gap-4">{addPoints(i)}</div>
      </div>
    ));
  }

  function addPoints(index) {
    //console.log(informations.information.section[index]);
    let pts = [];
    for (var key in informations.information.section[index].points) {
      console.log(key,informations.information.section[index].points[key]);
      pts.push(key);
    }
    return pts.map((e, i) => (
      <div key={i} className="bg-gray p-4 rounded-md text-white font-semibold text-lg flex w-max gap-8">
        <p>
          {e}
        </p>
        <p>
          {informations.information.section[index].points[e]}
        </p>
      </div>
    ));
  }

  return <div className="flex flex-col gap-8">{addSection()}</div>;
}
