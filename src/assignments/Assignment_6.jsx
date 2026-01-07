import { useState } from "react";
import "./Assignment_6.css";

export default function Assignment_6() {
  const [style, setStyle] = useState([]);
  const [ruleName, setRuleName] = useState("");
  const [ruleValue, setRuleValue] = useState("");

  function addRule() {
    if (ruleName === "" || ruleValue === "") return;
    setStyle([...style, { name: ruleName, value: ruleValue }]);
    setRuleName("");
    setRuleValue("");
  }

  function deleteRule(indexToDelete) {
    setStyle(style.filter((_, index) => index !== indexToDelete));
  }

  // Convert array to object for inline style
  const cssObject = style.reduce((obj, item) => ({
    ...obj,
    [item.name]: item.value
  }), {});

  return (
    <div>
      <ol>
        {style.map((item, index) => (
          <li key={index}>
            {item.name}: {item.value}{" "}
            <button onClick={() => deleteRule(index)}>Delete</button>
          </li>
        ))}
      </ol>

      <input
        type="text"
        placeholder="CSS Property (e.g., color)"
        value={ruleName}
        onChange={(e) => setRuleName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Value (e.g., red)"
        value={ruleValue}
        onChange={(e) => setRuleValue(e.target.value)}
      />
      <button onClick={addRule}>Add</button>

      <div className="sample-text" style={cssObject}>
        Sample Text
      </div>
    </div>
  );
}
