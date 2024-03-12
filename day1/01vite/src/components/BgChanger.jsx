import { useState } from "react";
import PropTypes from "prop-types";

function ColorTab({ setBgColor }) {
  const handleClick = (e) => setBgColor(e.target.innerText);
  const colors = [
    "red",
    "green",
    "blue",
    "olive",
    "pink",
    "gray",
    "yellow",
    "white",
    "black",
  ];
  return (
    <div className="absolute w-3/4 flex gap-5 left-1/2 -translate-x-1/2 justify-center align-middle bottom-8 bg-blue-100 px-12 py-2 mx-auto rounded-full">
      {colors.map((color, idx) => (
        <button
          className="px-3 py-1 rounded-full font-semibold"
          style={{
            backgroundColor: color,
            color:
              color == "black"
                ? "white"
                : color == "white" || color == "yellow"
                ? "black"
                : "white",
          }}
          key={idx}
          onClick={handleClick}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

function BgChanger() {
  const [bgColor, setBgColor] = useState("olive");
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className=" bg-red-500 h-[100vh] mx-auto item-center flex"
    >
      <ColorTab setBgColor={setBgColor} />
    </div>
  );
}

export default BgChanger;
ColorTab.propTypes = {
  setBgColor: PropTypes.func,
};
