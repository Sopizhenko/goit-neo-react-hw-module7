import React from "react";
import css from "./Contact.module.css";
import { MdPerson, MdPhone } from "react-icons/md";

const Contact = ({ contact, onDelete }) => {
  return (
    <>
      <div className={css.contactInfo}>
        <span className={css.contactInfoItem}>
          <MdPerson className={css.contactIcon} />
          {contact.name}
        </span>
        <span className={css.contactInfoItem}>
          <MdPhone className={css.contactIcon} />
          {contact.number}
        </span>
      </div>
      <button onClick={() => onDelete(contact.id)} className={css.button}>
        Delete
      </button>
    </>
  );
};

export default Contact;
