import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import task from "./task.json";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectFilter } from "./redux/Contacts/selector";
import { addContact, deleteContact } from "./redux/Contacts/actions";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const addContacts = (contact) => {
    dispatch(addContact(contact));
  };

  const getFilteredData = () => {
    return contacts.filter(
      (item) =>
        item.name.toLowerCase().includes(filteredContacts.toLowerCase()) ||
        item.number.toLowerCase().includes(filteredContacts.toLowerCase())
    );
  };
  const filteredData = getFilteredData();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <SearchBox filteredContacts={filteredContacts} />
      <ContactList contacts={filteredData} deleteContact={handleDelete} />
    </div>
  );
};

export default App;
