import React, { useEffect, useRef } from "react";
import { loremIpsum } from "react-lorem-ipsum";
import { useRegexSyntax } from "../../../context/Regex_context";

export default function TextOutput(props) {
  const textareaVal = useRef();
  const { regexSyntax } = useRegexSyntax();

  useEffect(() => {
    console.log("Regex Syntax: " + regexSyntax);
    let text = loremIpsum() + "";
    text = text
      .split(" ")
      .map((e) => e + " - ")
      .join("");
    textareaVal.current.value = text;
  }, [regexSyntax]);

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="rounded-md bg-custom-blue w-fit px-3 py-2">
        <p className="text-dark-gray font-bold font-poppins">Output</p>
      </div>
      <div className="w-full h-full bg-light-gray rounded-md flex p-4">
        <textarea
          ref={textareaVal}
          type="text"
          className="resize-none h-full w-full border-none text-dark-gray font-bold text-lg"
        />
      </div>
    </div>
  );
}
