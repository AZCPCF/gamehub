import React, { useState, useContext } from "react";
import { ColorContext } from "../../contexts/ColorContext";
import { colors } from "../../constants/colors";
import Settings from "../Settings";
import { useGameContext } from "../../contexts/GameContext";

const DinoColorSelector: React.FC = () => {
    const {isDay} = useGameContext()
  const [color, setColor] = useState("red"); // Default color
  const [colorCode, setColorCode] = useState("500"); // Default shade
  const { setColor: setColorContext } = useContext(ColorContext); // Context setter

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    setColorContext(colors[selectedColor][parseInt(colorCode)]); // Update context
  };

  const handleShadeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedShade = e.target.value;
    setColorCode(selectedShade);
    setColorContext(colors[color][parseInt(selectedShade)]); // Update context
  };

  return (
    <div className="absolute top-2 left-2 flex flex-col gap-2 p-4 rounded shadow-2xl  transition-colors" style={{backgroundColor:isDay?"#001f3f":"#f0f8ff"}}>
      <label className="text-sm font-medium text-gray-700">
        Select Dino Color:
      </label>
      <select
        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        value={color}
        onChange={handleColorChange}
      >
        {Object.keys(colors).map((colorKey) => (
          <option key={colorKey} value={colorKey}>
            {colorKey}
          </option>
        ))}
      </select>

      <label className="text-sm font-medium text-gray-700 mt-2">
        Select Color Shade:
      </label>
      <select
        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        value={colorCode}
        onChange={handleShadeChange}
      >
        {Object.keys(colors[color]).map((shadeKey) => (
          <option key={shadeKey} value={shadeKey}>
            {shadeKey}
          </option>
        ))}
      </select>
      <Settings />
    </div>
  );
};

export default DinoColorSelector;
