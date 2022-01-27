import React, { useContext, useState } from "react";

const RegexContext = React.createContext();

export function useRegexSyntax() {
  return useContext(RegexContext);
}

export function RegexProv({ children }) {

  const [regexSyntax, setRegexSyntax] = useState("");
  const [textInput, setTextInput] = useState("");
  const [textOutput, setTextOutput] = useState("");

  const value = {
    regexSyntax,
    setRegexSyntax,
    textInput,
    setTextInput,
    textOutput,
    setTextOutput
  };

  return (
    <RegexContext.Provider value={value}>
      {children}
    </RegexContext.Provider>
  );
}