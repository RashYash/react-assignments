import { useState, useEffect } from "react";
import axios from "axios";
import "./Assignment_9.css";

export default function Assignment_9() {
  const [colors, setColors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  function fetchColors(query = "", pageNum = 1) {
    axios.get(`https://apis.dnjs.lk/objects/colors.php?search=${query}&page=${pageNum}&limit=${limit}`)
      .then((response) => {
        setColors(response.data.data); // data array
        const total = response.data.total;
        setTotalPages(Math.ceil(total / limit));
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchColors("", page); // fetch all on mount
  }, []);

  function handleSearch() {
    setPage(1); // reset to page 1
    fetchColors(searchTerm, 1);
  }

  function handlePageChange(newPage) {
    setPage(newPage);
    fetchColors(searchTerm, newPage);
  }

  return (
    <div>
      <h2>Colors with Pagination</h2>
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

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={i + 1 === page ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
