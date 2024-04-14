import { ADD_CONTACT, DELETE_CONTACT } from "./constants";
import toast, { Toaster } from "react-hot-toast";

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});
