import { useState, useEffect } from 'react';

import initContacts from './initialContacts.json';

import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import { nanoid } from 'nanoid';

import './App.css';

function App() {
  const [contacts, setContacts] = useState(initContacts);
  const [search, setSearch] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContact = newContact => {
    const finalNewContact = {
      ...newContact,
      id: nanoid(),
    };
    setContacts(prevContacts => [...prevContacts, finalNewContact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <p>{search} </p>
      <ContactForm addContact={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
