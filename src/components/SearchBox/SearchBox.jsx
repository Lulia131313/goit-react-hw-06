import { useState } from "react";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeSearchStr } from "../../redux/Contacts/slice";

const SearchBox = ({ filteredContacts }) => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(changeSearchStr(e.target.value));
  };

  const handleReset = () => {
    dispatch(changeSearchStr(""));
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
