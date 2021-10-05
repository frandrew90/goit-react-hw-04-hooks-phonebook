import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const initialState = {
  name: '',
  number: '',
};

const ContactForm = ({ isThereContact, addNewContact }) => {
  const [state, setState] = useState(initialState);

  const reset = () => {
    setState({
      name: '',
      number: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isThereContact(state.name)) {
      return alert(`${state.name} has been already in contact list`);
    }
    addNewContact(state);
    reset();
  };

  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
      <label className={s.contactFormName}>
        Name:
        <input
          className={s.contactFormNameInput}
          onChange={handleChange}
          type="text"
          name="name"
          value={state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={s.contactFormNumber}>
        Number:
        <input
          className={s.contactFormNumInput}
          onChange={handleChange}
          type="tel"
          name="number"
          value={state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button className={s.contactFormBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   reset = () => {
//     setState({
//       name: '',
//       number: '',
//     });
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (props.isThereContact(state.name)) {
//       return alert(`${state.name} has been already in contact list`);
//     }
//     props.addNewContact(state);
//     reset();
//   };

//   render() {
//     return (
//       <form className={s.contactForm} onSubmit={handleSubmit}>
//         <label className={s.contactFormName}>
//           Name:
//           <input
//             className={s.contactFormNameInput}
//             onChange={handleChange}
//             type="text"
//             name="name"
//             value={state.name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//         </label>

//         <label className={s.contactFormNumber}>
//           Number:
//           <input
//             className={s.contactFormNumInput}
//             onChange={handleChange}
//             type="tel"
//             name="number"
//             value={state.number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//           />
//         </label>

//         <button className={s.contactFormBtn} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
  isThereContact: PropTypes.func.isRequired,
};
