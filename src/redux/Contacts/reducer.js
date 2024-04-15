import contactData from "../../task.json";
import { addContact, changeSearchStr, deleteContact } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  contacts: contactData,

  filter: "",
};
// export const contactReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case DELETE_CONTACT:
//       return {
//         ...state,
//         contacts: state.contacts.filter((item) => item.id !== action.payload),
//       };
//     case ADD_CONTACT:
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case CHANGE_SEARCH_STR:
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const contactReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(deleteContact, (state, { payload }) => {
      state.contacts = state.contacts.filter((item) => item.id !== payload);
    })
    .addCase(addContact, (state, { payload }) => {
      state.contacts.push(payload);
    })
    .addCase(changeSearchStr, (state, { payload }) => {
      state.filter = payload;
    });
});
