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
        <div className="inputBefore font-bold text-lg w-full">
          <input
            type="text"
            //placeholder="([A-Z])"
            onLoadedData={() => {console.log("loaddddddddddddddddddddddd");}}
            defaultValue={regexInput}
            onChange={(e) => setRegexInput(e.target.value)}
            className="border-none text-dark-gray font-bold text-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}
