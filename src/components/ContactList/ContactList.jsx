import css from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts }) => {
  console.log('ContactList it`s ', contacts);
  // ContactItem
  return (
    <div className={css.wrapper}>
      {contacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}

      <h2>nothing</h2>
    </div>
  );
};

export default ContactList;
