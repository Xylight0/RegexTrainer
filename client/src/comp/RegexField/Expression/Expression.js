import React from "react";

export default function Expression() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-md bg-custom-blue w-fit px-3 py-2">
        <p className="text-dark-gray font-bold font-poppins">Expression</p>
      </div>
      <div className="w-full bg-light-gray h-16 rounded-md flex items-center pl-4">
          <input type="text" placeholder="/([A-Z])\w+/g" className="border-none text-dark-gray font-bold text-lg"/>
      </div>
    </div>
  );
}
