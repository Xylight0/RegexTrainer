import React, { useEffect, useState } from "react";
import { useRegexSyntax } from "../../../context/Regex_context";

export default function Expression() {
  const { setRegexSyntax } = useRegexSyntax();
  const [regexInput, setRegexInput] = useState("\\w");

  useEffect(() => {
    setRegexSyntax(regexInput);
  }, [regexInput, setRegexSyntax]);

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-md bg-custom-blue w-fit px-3 py-2">
        <p className="text-dark-gray font-bold font-poppins">Expression</p>
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
            <button className="px-2 py-1 rounded-md text-white font-semibold bg-gray">
              wadad
            </button>
            <button className="px-2 py-1 rounded-md text-white font-semibold bg-gray">
              wadad
            </button>
            <button className="px-2 py-1 rounded-md text-white font-semibold bg-gray">
              wadad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
