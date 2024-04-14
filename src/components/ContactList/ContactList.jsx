import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Cont.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((item) => (
        <li className={s.contact} key={item.name}>
          <div>
            <p>
              <IoPerson className={s.icon} />
              {item.name}
            </p>
            <p>
              <FaPhoneAlt className={s.icon} />
              {item.number}
            </p>
          </div>
          <button onClick={() => deleteContact(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
