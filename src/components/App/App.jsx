import React, { useState, useEffect } from 'react';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import dataContacts from '../../components/data.json';
import {Container} from './App.styled'


export const App = () => {

  const [contacts, setContacts] = useState(dataContacts);
  const [filter, setFilter] = useState('');
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));
  

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);


  const addContact = (data) => {
    if (contacts.some(contact => contact.name === data.name)) {
      Notify.warning(`${data.name} is in contacts`)
      return
    }

    const id = nanoid();
    const contact = { id: id, name: data.name, number: data.number };
    setContacts(state => [contact, ...state]);
  };

  const deleteContact = (e) => {
    setContacts(state => state.filter(contact => e !== contact.id))
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value)
  };

  

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter
        filter={filter}
        onChange={changeFilter}
      />
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  )
};