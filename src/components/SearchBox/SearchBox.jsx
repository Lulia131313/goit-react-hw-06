import { useState } from "react";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = ({ filteredContacts }) => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const handleReset = () => {
    dispatch(changeFilter(""));
  };

  return (
    <div className={s.search}>
      <p>Find contacts by name</p>
      <input
        className={s.search_input}
        type="text"
        value={filteredContacts}
        onChange={handleInputChange}
      />
      {filteredContacts && (
        <button className="btn border" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default SearchBox;
