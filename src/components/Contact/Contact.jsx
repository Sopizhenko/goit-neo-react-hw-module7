import React from "react";
import css from "./Contact.module.css";
import { MdPerson, MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

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
      <button onClick={handleDelete} className={css.button}>
        Delete
      </button>
    </>
  );
};

export default Contact;
