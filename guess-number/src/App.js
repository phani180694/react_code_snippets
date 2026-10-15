import React, { useState } from "react";
// import "./styles.css";

function GuessTheNumber() {
  const generateRandom = () => Math.floor(Math.random() * 100) + 1;
  const [numberToGuess, setNumberToGuess] = useState(generateRandom);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  // Function to handle guess checking
  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage("Please enter a number between 1 and 100");
      return;
    }
    setAttempts(attempts + 1);
    if (num === numberToGuess) {
      setMessage(
        `Contratulations you have gussed the number in ${attempts + 1} attempts.`,
      );
    } else if (num < numberToGuess) {
      setMessage("Too low! Try again");
    } else {
      setMessage("Too high! Try again");
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setNumberToGuess(generateRandom());
    setMessage("");
    setAttempts("");
    setGuess("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
        onChange={(e) => setGuess(e.target.value)}
      />
      <div>
        <button onClick={handleGuess}>Guess Button</button>
        <button onClick={resetGame}>Reset Button</button>
      </div>
      {message}
    </div>
  );
}

export default GuessTheNumber;
