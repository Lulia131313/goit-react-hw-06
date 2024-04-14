import { useState } from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onInput }) => {
  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={s.search}>
      <p>Find contacts by name</p>
      <input
        className={s.search_input}
        type="text"
        value={value}
        onChange={(e) => onInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
