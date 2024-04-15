import { useState } from "react";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/Contacts/actions";

const SearchBox = ({ filteredContacts }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.search}>
      <p>Find contacts by name</p>
      <input
        className={s.search_input}
        type="text"
        value={String(filteredContacts)}
        onChange={(e) => dispatch(filter(e.target.value))}
      />
      {filteredContacts && (
        <button className="btn border" onClick={() => dispatch(filter(""))}>
          Reset
        </button>
      )}
    </div>
  );
};

export default SearchBox;
