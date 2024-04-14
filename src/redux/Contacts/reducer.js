import contactData from "../../task.json";
import { ADD_CONTACT, DELETE_CONTACT } from "./constants";

const initialState = {
  contacts: contactData,

  filter: "",
};
export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== action.payload),
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};
