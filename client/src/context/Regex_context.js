import React from "react";

const RegexContext = React.createContext();

function regexSyntax() {
  return "test";
}

function RegexSynProv({ children }) {
  return (
    <RegexContext.Provider value={regexSyntax}>
      {children}
    </RegexContext.Provider>
  );
}

export { RegexSynProv };
