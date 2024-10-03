import { useState, useEffect } from 'react';

import initContacts from './initialContacts.json';

import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

import './App.css';

function App() {
  const [contacts, setContacts] = useState(initContacts);
  const [search, setSearch] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <p>{search} </p>
      {/* <ContactForm /> */}
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
