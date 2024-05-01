import React, { useState } from "react";
// import "./styles.css";

export default function App() {
  const [color, setColor] = useState({
    r: 0,
    g: 0,
    b: 0
  });

  const handleInputChange = (channel, value) => {
    setColor({
      ...color,
      [channel]: parseInt(value, 10)
    });
  };

  const divStyle = {
    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`
  };

  return (
    <div className="App">
      <label>R:</label>
      <input
        type="number"
        value={color.r}
        onChange={(e) => handleInputChange("r", e.target.value)}
        min={0}
        max={255}
      />

      <label>G:</label>
      <input
        type="number"
        value={color.g}
        onChange={(e) => handleInputChange("g", e.target.value)}
        min={0}
        max={255}
      />

      <label>B:</label>
      <input
        type="number"
        value={color.b}
        onChange={(e) => handleInputChange("b", e.target.value)}
        min={0}
        max={255}
      />

      <div className="color-preview" style={divStyle}></div>

      {/* Display area for the selected color in RGB format */}
      <div>
        Selected Color (RGB):{" "}
        <span style={{ color: `rgb(${color.r}, ${color.g}, ${color.b})` }}>
          RGB({color.r}, {color.g}, {color.b})
        </span>
      </div>

      {/* Display area for the selected color as an actual color */}
      <div>
        Selected Color:{" "}
        <span
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
            display: "inline-block",
            marginLeft: "5px",
            border: "1px solid #ccc"
          }}
        ></span>
      </div>
    </div>
  );
}
