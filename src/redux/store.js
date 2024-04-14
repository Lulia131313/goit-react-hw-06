import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";
import { contactReducer } from "./Contacts/reducer";

const enhancer = devToolsEnhancer();

export const store = createStore(contactReducer);
