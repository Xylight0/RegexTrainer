import React, { useEffect } from "react";
import { loremIpsum } from "react-lorem-ipsum";

export default function List() {
  let informations = [];

  function addInfo() {
    for (let i = 0; i < 10; i++) {
      informations.push(loremIpsum());
    }
  }
  useEffect(() => {
    addInfo()
  }, []);
  

  return (
    <div>
      {informations.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
}
