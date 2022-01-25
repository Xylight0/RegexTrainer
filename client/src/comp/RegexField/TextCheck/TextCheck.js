import React, { useContext, useEffect, useRef } from "react";
import { loremIpsum } from "react-lorem-ipsum";
import RegexContext from "../../../context/Regex_context";

export default function TextCheck(props) {
  const textareaVal = useRef();
  const { regexSyntax } = React.useContext(RegexContext)
  useEffect(() => {
    console.log(regexSyntax);
    let text = loremIpsum() + "";
    text = text
      .split(" ")
      .map((e) => e + " - ")
      .join("");
    textareaVal.current.value = text;
  }, []);

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="rounded-md bg-custom-blue w-fit px-3 py-2">
        <p className="text-dark-gray font-bold font-poppins">Expression</p>
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
