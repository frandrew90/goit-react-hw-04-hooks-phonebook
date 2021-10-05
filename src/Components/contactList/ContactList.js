import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ findContact, removeContact }) => {
  return (
    <ul>
      {findContact.map(contact => {
        return (
          <li className={s.contactListItem} key={contact.id}>
            <span className={s.contactListName}>{contact.name}:</span>
            &nbsp;
            <span className={s.contactListNumber}>{contact.number}</span>
            <button
              className={s.contactListItemBtn}
              type="button"
              id={contact.id}
              onClick={removeContact}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  findContact: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
