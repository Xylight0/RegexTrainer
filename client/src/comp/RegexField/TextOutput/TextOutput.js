import React, { useEffect, useRef } from "react";
import { useRegexSyntax } from "../../../context/Regex_context";

export default function TextOutput(props) {
  const textareaVal = useRef();
  const { regexSyntax, textInput, setTextOutput } = useRegexSyntax();

  function textEvaluation(syntax) {
    let result;
    try {
      let exp = new RegExp(syntax, "g");
      result = textInput.match(exp);
    } catch (e) {
      return "Invalid Regex Expression...";
    }
    setTextOutput(result);
    return result;
  }

  useEffect(() => {
    let text = textEvaluation(regexSyntax);
    textareaVal.current.value = text;
  }, [regexSyntax, textInput]);

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="rounded-md bg-custom-blue w-fit px-3 py-2">
        <p className="text-dark-gray font-bold font-poppins text-xl">Output</p>
      </div>
      <div className="w-full h-full bg-light-gray rounded-md flex p-4">
        <textarea
          readOnly
          ref={textareaVal}
          type="text"
          className="resize-none h-full w-full border-none text-dark-gray font-bold text-lg hover:cursor-not-allowed"
        />
      </div>
    </div>
  );
}
