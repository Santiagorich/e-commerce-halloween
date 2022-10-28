import React from "react";

function OrangeButton({text}) {
  return (
    <div className="mt-4 flex flex-row justify-between">
      <button className=" rounded-lg bg-orange-600 py-4 px-6 text-lg font-semibold">
        {text}
      </button>
    </div>
  );
}

export default OrangeButton;
