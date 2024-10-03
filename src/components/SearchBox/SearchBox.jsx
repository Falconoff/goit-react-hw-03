// import { useState } from 'react';

import css from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
  // const [inputValue, setInputValue] = useState('');

  // const handleChange = evt => {
  //   // setInputValue(evt.target.value);
  //   handleSearch(evt.target.value);
  // };

  return (
    <div className={css.wrap}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={event => onSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
