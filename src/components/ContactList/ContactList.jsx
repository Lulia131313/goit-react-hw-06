// import { IoPerson } from "react-icons/io5";
// import { FaPhoneAlt } from "react-icons/fa";
import s from "./Cont.module.css";
import Contact from "./Contact/Contact";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((item) => (
        <li className={s.contact} key={item.name}>
          <Contact
            name={item.name}
            number={item.number}
            deleteContact={deleteContact}
            id={item.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;