import React, { useState } from "react";
// import "./styles.css";
function ChipsInput() {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [idCounter, setIdcounter] = useState(0);

  const handleKeyDown = (event) => {
    console.log("coming here");
    if (event.key === "Enter" && inputValue.trim() !== "") {
      const item = {
        id: idCounter,
        text: inputValue,
      };
      setChips([...chips, item]);
      setIdcounter(idCounter + 1);
      setInputValue("");
    }
  };
  const handleDeleteChip = (id) => {
    setChips(
      chips.filter((x) => {
        return x.id !== id;
      }),
    );
  };
  return (
    <div className="main-container">
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        className="input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div
        style={{
          margin: "20px",
          display: "flex",
          alignItems: "center",
          flexwrap: "wrap",
        }}
      >
        {chips.map((x) => (
          <div
            key={x.id}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "5px",
              backgroundColor: "lightgray",
              padding: "5px 10px",
            }}
          >
            <span>{x.text}</span>
            <button onClick={() => handleDeleteChip(x.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
