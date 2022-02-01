import React, { useEffect, useState } from "react";
import { useRegexSyntax } from "../../../context/Regex_context";

export default function Expression() {
  const { setRegexSyntax } = useRegexSyntax();
  const [regexInput, setRegexInput] = useState("\\w");
  const [modifier, setModifier] = useState("");

  useEffect(() => {
    setRegexSyntax(regexInput);
  }, [regexInput, setRegexSyntax]);

  function stateChange(e) {
    if (e.target.value === modifier) {
      setModifier("");
    } else {
      setModifier(e.target.value);
    }

    if (e.target.classList.contains("bg-gray")) {
      e.target.classList.remove("bg-gray");
      e.target.classList.add("bg-custom-blue");
    } else {
      e.target.classList.remove("bg-custom-blue");
      e.target.classList.add("bg-gray");
    }
  }

  useEffect(() => {
    console.log(modifier);
  }, [modifier]);

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-md bg-custom-blue w-fit px-3 py-2">
        <p className="text-dark-gray font-bold font-poppins text-xl">Expression</p>
      </div>
      <div className="w-full bg-light-gray h-16 rounded-md flex items-center px-4">
        <div className="inputBefore font-bold text-lg w-full flex flex-row">
          <input
            type="text"
            defaultValue={regexInput}
            onChange={(e) => setRegexInput(e.target.value)}
            className="border-none text-dark-gray font-bold text-lg w-full"
          />
          <div className="flex flex-row gap-4">
            <button
              onClick={stateChange}
              value="g"
              className="btnOne w-8 px-2 py-1 rounded-md text-white font-semibold bg-gray"
            >
              G
            </button>
            <button
              onClick={stateChange}
              value="i"
              className="btnTwo w-8 px-2 py-1 rounded-md text-white font-semibold bg-gray"
            >
              I
            </button>
            <button
              onClick={stateChange}
              value="m"
              className="btnThree w-8 px-2 py-1 rounded-md text-white font-semibold bg-gray"
            >
              M
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
