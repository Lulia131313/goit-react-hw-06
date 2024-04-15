import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactsSlice";
import { selectNameFilter } from "./redux/filtersSlice";

const App = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const addContacts = (contact) => {
    const isExist = contacts.some(
      (item) => item.name === contact.name && item.number === contact.number
    );
    if (isExist) {
      return toast.error("This book already exist!");
    }
    dispatch(addContact(contact));
    toast.success("Book was added! 🔥");
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
      <ContactList
        contacts={filteredData}
        deleteContact={handleDelete}
        filteredContacts={filteredContacts}
      />
    </div>
  );
};

export default App;
