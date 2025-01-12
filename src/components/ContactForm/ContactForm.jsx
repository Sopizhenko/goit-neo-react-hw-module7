import React, { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, acions) => {
    dispatch(addContact(values));
    acions.resetForm();
  };

  const inputValidation = Yup.string()
    .min(3, "Too short!")
    .max(50, "To long!")
    .required("Required input!");
  const contactValidation = Yup.object().shape({
    name: inputValidation,
    number: inputValidation,
  });

  const nameId = useId();
  const numberId = useId();

  return (
    <>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={contactValidation}
      >
        <Form className={css.addContactForm}>
          <label htmlFor={nameId} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameId}
            className={css.formInput}
          ></Field>
          <ErrorMessage name="name" component="span" className={css.error} />

          <label htmlFor={numberId} className={css.label}>
            Number
          </label>
          <Field
            type="text"
            name="number"
            id={numberId}
            className={css.formInput}
          ></Field>
          <ErrorMessage name="number" component="span" className={css.error} />

          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
