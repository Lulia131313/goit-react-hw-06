import s from "./Cont.module.css";
import Contact from "./Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.contacts}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
