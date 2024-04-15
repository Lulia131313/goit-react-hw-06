import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";
import { contactReducer } from "./Contacts/slice";
import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filtersSlice";

const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
