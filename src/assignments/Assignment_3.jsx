import { useState } from "react";
import "./Assignment_3.css";

export default function Assignment_3() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addNumber() {
    if (inputValue === "") return; // don't add empty
    setNumbers([...numbers, Number(inputValue)]);
    setInputValue(""); // clear input
  }

  const total = numbers.reduce((sum, num) => sum + num, 0);
  const average = numbers.length === 0 ? 0 : (total / numbers.length).toFixed(2);

  return (
    <div>
      <h2>Total: {total}</h2>
      <h2>Average: {average}</h2>

      <ol>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ol>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={addNumber}>Add</button>
    </div>
  );
}
