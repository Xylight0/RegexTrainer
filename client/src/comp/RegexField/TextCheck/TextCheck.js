import React, { useEffect, useRef } from "react";
import { loremIpsum } from "react-lorem-ipsum";

export default function TextCheck() {
  const textareaVal = useRef();

  useEffect(() => {
    let text = loremIpsum() + "";
    text = text.split(" ").map(e => e + " - ").join("")
    textareaVal.current.value = text;
  }, []);
  
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="rounded-md bg-custom-blue w-fit px-3 py-2">
        <p className="text-dark-gray font-bold font-poppins">Expression</p>
      </div>
      <div className="w-full h-1/2 bg-light-gray rounded-md flex p-4">
        <textarea
          ref={textareaVal}
          type="text"
          //placeholder="Text ..."
          className="resize-none h-full w-full border-none text-dark-gray font-bold text-lg"
        />
      </div>
    </div>
  );
}
