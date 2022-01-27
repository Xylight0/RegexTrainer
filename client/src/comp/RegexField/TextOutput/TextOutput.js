import React, { useEffect, useRef } from "react";
import { useRegexSyntax } from "../../../context/Regex_context";

export default function TextOutput(props) {
  const textareaVal = useRef();
  const { regexSyntax, textInput, setTextOutput } = useRegexSyntax();

  function textEvaluation(syntax) {
    console.log("Input: " + textInput);
    let result;
    try {
      result = textInput.match(syntax);
    } catch (e) {
      return "Invalid Regex Expression..."
    }
    setTextOutput(result);
    return result;
  }

  useEffect(() => {
    console.log("Regex Syntax: " + regexSyntax);
    let text = textEvaluation(regexSyntax);
    console.log("Output: " + text);
    textareaVal.current.value = text;
  }, [regexSyntax, textInput]);

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
