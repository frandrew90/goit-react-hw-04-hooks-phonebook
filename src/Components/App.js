import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './contactList/ContactList';
import ContactForm from './contatctForm/ContactForm';
import Filter from './filter/Filter';
import s from '../Components/App.module.css';

class App extends Component {
  state = {
    contacts: [],

    filter: '',
  };

  addNewContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: uuidv4() }],
    }));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  removeContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
      // filter: '',
    }));
  };

  findContact = e => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  isThereContact = name =>
    this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <>
        <h1 className={s.title}>Phonebook</h1>

        <ContactForm
          //   handleChange={this.handleChange}
          addNewContact={this.addNewContact}
          isThereContact={this.isThereContact}
        />

        <h2 className={s.title}>Contacts</h2>

        <Filter filter={this.state.filter} onChange={this.handleChange} />

        <ContactList
          findContact={this.findContact()}
          removeContact={this.removeContact}
        />
      </>
    );
  }
}

export default App;
