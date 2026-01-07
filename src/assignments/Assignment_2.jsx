import { useState } from "react";
import "./Assignment_2.css";

export default function Assignment_2() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  function calculate() {
    const a = Number(num1);
    const b = Number(num2);

    if (operation === "add") setResult(a + b);
    if (operation === "sub") setResult(a - b);
    if (operation === "mul") setResult(a * b);
    if (operation === "div") setResult(a / b);
  }

  return (
    <div>
      <select onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Addition</option>
        <option value="sub">Subtraction</option>
        <option value="mul">Multiplication</option>
        <option value="div">Division</option>
      </select>

      <br /><br />

      <input
        type="number"
        placeholder="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      {num1 !== "" && num2 !== "" && (
        <>
          <button onClick={calculate}>Calculate</button>
          <p>Result: {result}</p>
        </>
      )}
    </div>
  );
}

