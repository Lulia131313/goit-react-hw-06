import { createSlice } from "@reduxjs/toolkit";
import contactData from "../../task.json";

const initialState = {
  contacts: contactData,
  filter: "",
};

const slice = createSlice({
  name: "contacts",
  initialState,

  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter((item) => item.id !== payload);
    },
    changeSearchStr: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const contactReducer = slice.reducer;
export const { addContact, deleteContact, changeSearchStr } = slice.actions;
export const selectContacts = (state) => state.contacts.contacts;
export const selectFilter = (state) => state.contacts.filter;
