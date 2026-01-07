import { useState } from "react";
import "./Assignment_5.css";

export default function Assignment_5() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addNumber() {
    if (inputValue === "") return;
    setNumbers([...numbers, Number(inputValue)]);
    setInputValue("");
  }

  function deleteNumber(indexToDelete) {
    setNumbers(numbers.filter((_, index) => index !== indexToDelete));
  }

  function sortAscending() {
    const sorted = [...numbers].sort((a, b) => a - b);
    setNumbers(sorted);
  }

  function sortDescending() {
    const sorted = [...numbers].sort((a, b) => b - a);
    setNumbers(sorted);
  }

  function moveUp(index) {
    if (index === 0) return;
    const newNumbers = [...numbers];
    [newNumbers[index - 1], newNumbers[index]] = [newNumbers[index], newNumbers[index - 1]];
    setNumbers(newNumbers);
  }

  function moveDown(index) {
    if (index === numbers.length - 1) return;
    const newNumbers = [...numbers];
    [newNumbers[index + 1], newNumbers[index]] = [newNumbers[index], newNumbers[index + 1]];
    setNumbers(newNumbers);
  }

  return (
    <div>
      <div className="top-buttons">
        <button onClick={sortAscending}>Sort Ascending</button>
        <button onClick={sortDescending}>Sort Descending</button>
      </div>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={addNumber}>Add</button>

      <ol>
        {numbers.map((num, index) => (
          <li key={index}>
            {num}{" "}
            <button onClick={() => deleteNumber(index)}>Delete</button>
            <button onClick={() => moveUp(index)} disabled={index === 0}>Move Up</button>
            <button onClick={() => moveDown(index)} disabled={index === numbers.length - 1}>Move Down</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
