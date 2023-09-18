import { useState } from 'react';
import './SearchBar.css'

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(term);
    setTerm('')
  }

  function handleChange(e) {
    setTerm(e.target.value);
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">Enter Search Term</label>
        <input type="text" value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
