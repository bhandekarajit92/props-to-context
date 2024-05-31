import React, { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bg-white gap-3 bottom-6 inset-x-0 justify-center rounded-xl px-3 py-1">
        <button
          onClick={() => setColor("red")}
          className="outline-none shadow-lg rounded-full px-3 py-1 text-white"
          style={{ backgroundColor: "red" }}
        >
          RED
        </button>
        <button
          onClick={() => setColor("blue")}
          className="outline-none rounded-full px-3 py-1 text-white"
          style={{ backgroundColor: "blue" }}
        >
          blue
        </button>
        <button
          onClick={() => setColor("green")}
          className="outline-none rounded-full px-3 py-1 text-white"
          style={{ backgroundColor: "green" }}
        >
          green
        </button>
        <button
          onClick={() => setColor("orange")}
          className="outline-none rounded-full px-3 py-1 text-white"
          style={{ backgroundColor: "orange" }}
        >
          orange
        </button>
        <button
          onClick={() => setColor("grey")}
          className="outline-none rounded-full px-3 py-1 text-white"
          style={{ backgroundColor: "grey" }}
        >
          grey
        </button>
      </div>
    </div>
  );
}

export default BgChanger;
