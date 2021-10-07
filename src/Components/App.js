import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './contactList/ContactList';
import ContactForm from './contatctForm/ContactForm';
import Filter from './filter/Filter';
import s from '../Components/App.module.css';

// const initialState = {
//   contactsList: [],

//   filter: '',
// };

const App = () => {
  const [contactsList, setСontactsList] = useState([]);
  const [filter, setFilter] = useState('');
  // const [state, setState] = useState(initialState);

  // const contacts = JSON.parse(localStorage.getItem('contacts'));
  // console.log('1', state);
  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      // setState(prevState => ({ ...prevState, contacts }));
      setСontactsList([...contactsList, ...contacts]);
    }
    // console.log(state);
  }, []);
  // console.log(state);
  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (contacts) {
  //     setState({ contacts });
  //   }
  // }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactsList));
  }, [contactsList]);

  // componentDidUpdate(prevState) {
  //   if (prevState.contacts !== state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(state.contacts));
  //   }
  // }

  const addNewContact = newContact => {
    setСontactsList([...contactsList, { ...newContact, id: uuidv4() }]);
    // setState(prevState => ({
    //   ...prevState,
    //   contacts: [...prevState.contacts, { ...newContact, id: uuidv4() }],
    // }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'filter' && setFilter(value);
    // setState(prevState => ({ ...prevState, [name]: value }));
  };

  const removeContact = e => {
    const id = e.target.id;
    // setState(prevState => ({
    //   ...prevState,
    //   contacts: prevState.contacts.filter(contact => contact.id !== id),
    //   // filter: '',

    // }));
    setСontactsList(contactsList.filter(contact => contact.id !== id));
  };

  const findContact = e => {
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const isThereContact = name =>
    contactsList.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

  return (
    <>
      <h1 className={s.title}>Phonebook</h1>

      <ContactForm
        //   handleChange={handleChange}
        addNewContact={addNewContact}
        isThereContact={isThereContact}
      />

      <h2 className={s.title}>Contacts</h2>

      <Filter filter={filter} onChange={handleChange} />

      <ContactList findContact={findContact()} removeContact={removeContact} />
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     contacts: [],

//     filter: '',
//   };

//   addNewContact = newContact => {
//     setState(prevState => ({
//       contacts: [...prevState.contacts, { ...newContact, id: uuidv4() }],
//     }));
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     setState({ [name]: value });
//   };

//   removeContact = e => {
//     const id = e.target.id;
//     setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//       // filter: '',
//     }));
//   };

//   findContact = e => {
//     return state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(state.filter.toLowerCase()),
//     );
//   };

//   isThereContact = name =>
//     state.contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase(),
//     );

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     if (contacts) {
//       setState({ contacts });
//     }
//   }

//   componentDidUpdate(prevState) {
//     if (prevState.contacts !== state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(state.contacts));
//     }
//   }

//   render() {
//     return (
//       <>
//         <h1 className={s.title}>Phonebook</h1>

//         <ContactForm
//           //   handleChange={handleChange}
//           addNewContact={addNewContact}
//           isThereContact={isThereContact}
//         />

//         <h2 className={s.title}>Contacts</h2>

//         <Filter filter={state.filter} onChange={handleChange} />

//         <ContactList
//           findContact={findContact()}
//           removeContact={removeContact}
//         />
//       </>
//     );
//   }
// }

// export default App;
