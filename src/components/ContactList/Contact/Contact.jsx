import { IoPerson } from "react-icons/io5";
import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={s.contact}>
      <div>
        <p>
          <IoPerson className={s.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhoneAlt className={s.icon} />
          {contact.number}
        </p>
      </div>
      <button onClick={() => onDelete(contact.id)} className="btn border">
        Delete
      </button>
    </li>
  );
};

export default Contact;
