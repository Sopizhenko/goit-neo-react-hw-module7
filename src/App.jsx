import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";

function App() {

  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (values, actions) => {
    const contact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    const isNameExist = contacts.some((contact) => contact.name.toLowerCase() === values.name.toLowerCase());
    const isNumberExist = contacts.some((contact) => contact.number === values.number);
    if (isNameExist || isNumberExist) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [contact, ...prevContacts]);
    actions.resetForm();
  };


  const deleteContact = (contactId) => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={filter} onSearch={setFilter}/>
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
