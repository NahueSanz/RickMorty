import "./SearchBar.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div className="search-bar">
      <input
      className="inputSearchBar"
        type="search"
        value={id}
        onChange={handleChange}
        placeholder="Ingrese un numero"
      />
      <button className="btnSearchBar" onClick={() => props.onSearch(id)}>
        Agregar
      </button>
      <button
        className="btnSearchBar"
        onClick={() =>
          props.onSearch(Math.floor(Math.random() * (826 - 1) + 1))
        }
      >
        Random
      </button>
    </div>
  );
}
