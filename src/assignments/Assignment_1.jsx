import { useState } from "react";
import "./Assignment_1.css";

export default function Assignment_1() {
  const [section, setSection] = useState(1);

  return (
    <div>
      <button onClick={() => setSection(1)}>Section #1</button>
      <button onClick={() => setSection(2)}>Section #2</button>
      <button onClick={() => setSection(3)}>Section #3</button>

      {section === 1 && <p>This is paragraph for Section 1.</p>}
      {section === 2 && <p>This is paragraph for Section 2.</p>}
      {section === 3 && <p>This is paragraph for Section 3.</p>}
    </div>
  );
}

