import { useState, useEffect } from "react";
import axios from "axios";
import "./Assignment_8.css";

export default function Assignment_8() {
  const [colors, setColors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function fetchColors(query = "") {
    axios.get(`https://apis.dnjs.lk/objects/colors.php${query ? "?search=" + query : ""}`)
      .then((response) => {
        setColors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching colors:", error);
      });
  }

  useEffect(() => {
    fetchColors(); // fetch all colors on mount
  }, []);

  function handleSearch() {
    fetchColors(searchTerm);
  }

  return (
    <div>
      <h2>Search Colors</h2>
      <input
        type="text"
        placeholder="Search color"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color.name} - {color.code}</li>
        ))}
      </ul>
    </div>
  );
}
