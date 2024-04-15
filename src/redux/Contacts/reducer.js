import contactData from "../../task.json";
import { addContact, changeSearchStr, deleteContact } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  contacts: contactData,

  filter: "",
};

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
