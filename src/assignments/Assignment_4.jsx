import { useState } from "react";
import "./Assignment_4.css";

export default function Assignment_4() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addNumber() {
    if (inputValue === "") return;
    setNumbers([...numbers, Number(inputValue)]);
    setInputValue("");
  }

  function deleteNumber(indexToDelete) {
    const newNumbers = numbers.filter((_, index) => index !== indexToDelete);
    setNumbers(newNumbers);
  }

  const total = numbers.reduce((sum, num) => sum + num, 0);
  const average = numbers.length === 0 ? 0 : (total / numbers.length).toFixed(2);

  return (
    <div>
      <h2>Total: {total}</h2>
      <h2>Average: {average}</h2>

      <ol>
        {numbers.map((num, index) => (
          <li key={index}>
            {num}{" "}
            <button onClick={() => deleteNumber(index)}>Delete</button>
          </li>
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
