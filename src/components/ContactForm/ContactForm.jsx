import css from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const formEls = evt.currentTarget.elements;
    const name = formEls.name.value;
    const number = formEls.number.value;

    const formData = { name, number };

    console.log('formData: ', formData);
    addContact(formData);
  };

  return (
    <form className={css.wrapper} onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <input type="text" name="name" placeholder="Michael" required />
      </label>
      <label>
        <p>Number</p>
        <input type="text" name="number" placeholder="098-123-45-67" required />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
