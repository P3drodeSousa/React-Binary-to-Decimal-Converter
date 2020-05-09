import React, { useState } from "react";
import "./App.css";

function App() {
  const [binary, setBinary] = useState("");
  const [decimalText, setDecimalText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (binary.match(/^[0-1]+$/g) === null) {
      setErrorMessage("Enter either 0 or 1");
      return;
    }
    setErrorMessage("");
    const reversedBinaryText = binary
      .split("")
      .map(Number) // Convert to a number from string
      .reverse();

    console.log(reversedBinaryText);
    // Calculate the result by accumulating previous vaue
    const result = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    );

    setDecimalText(result);
  };
  return (
    <div className="App">
      <h1>Binary to Decimal Converter</h1>
      <br />
      <div>
        {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="binary">Binary Input</label>
          <br />
          <input
            type="text"
            name="binary"
            value={binary}
            onChange={e => setBinary(e.target.value)}
            placeholder="Enter 0 or 1"
          />
          <br />
          <label htmlFor="decimal">Decimal Output</label>
          <br />
          <input type="text" value={decimalText} name="decimal" disabled />
          <br />
          <button>Convert</button>
        </form>
      </div>
    </div>
  );
}

export default App;
