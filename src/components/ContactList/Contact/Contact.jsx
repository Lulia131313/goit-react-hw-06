import { IoPerson } from "react-icons/io5";
import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, deleteContact, id }) => {
  return (
    <div>
      <div>
        <p>
          <IoPerson className={s.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={s.icon} />
          {number}
        </p>
      </div>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </div>
  );
};

export default Contact;
