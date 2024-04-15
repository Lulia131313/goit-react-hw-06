import { ADD_CONTACT, CHANGE_SEARCH_STR, DELETE_CONTACT } from "./constants";
import toast, { Toaster } from "react-hot-toast";

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const changeSearchStr = (str) => ({
  type: CHANGE_SEARCH_STR,
  payload: str,
});
