import React, { Component } from 'react';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import dataContacts from '../../components/data.json';
import {Container} from './App.styled'


export class App extends Component {

  state = {
    contacts: dataContacts,
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const savedContacts = JSON.parse(contacts);
    if (savedContacts) {
      this.setState({contacts: savedContacts})
    }
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  };

  addContact = (data) => {

    if (this.state.contacts.filter(contact => contact.name === data.name).length > 0) {
      Notify.warning(`${data.name} is in contacts`)
      return
    }

    const id = nanoid();
    const contact = { id: id, name: data.name, number: data.number };
    const contacts = [contact, ...this.state.contacts];

    this.setState({ contacts: contacts });
  };  

  deleteContact = (e) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => e !== contact.id)
    }))
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() { 

    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChange={this.changeFilter}
        />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    )
  }
};