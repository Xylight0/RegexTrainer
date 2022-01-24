import React from "react";

export default function Expression() {
  function inputLength(e) {
    let val = e.target.value;

    e.target.style.width = val.length + "ch";
    console.log(val);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-md bg-custom-blue w-fit px-3 py-2">
        <p className="text-dark-gray font-bold font-poppins">Expression</p>
      </div>
      <div className="w-full bg-light-gray h-16 rounded-md flex items-center pl-4">
        <div className="inputBefore font-bold text-lg">
          <input
            type="text"
            defaultValue="([A-Z])"
            onChange={(e) => inputLength(e)}
            className="border-none text-dark-gray font-bold text-lg"
          />
        </div>
      </div>
    </div>
  );
}
