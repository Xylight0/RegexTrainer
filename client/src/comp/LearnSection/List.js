import React from "react";
import { loremIpsum } from "react-lorem-ipsum";

export default function List() {
  let informations = [];

  function addInfo() {
    for (let i = 0; i < 100; i++) {
      informations.push("loremIpsum()dddddddddddddddddddddd");
    }
    console.log(informations)
    return informations.map((e) => (
      <div className="bg-gray p-4 rounded-md text-white flex w-fit">{e}</div>
    ))
  }

  return (
    <div className="flex flex-col gap-2">
      {addInfo()}
    </div>
  );
}
