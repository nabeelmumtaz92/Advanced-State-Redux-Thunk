// src/components/NameInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNationality } from '../actions';

const NameInput = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchNationality(name));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
      />
      <button type="submit">Predict Nationality</button>
    </form>
  );
};

export default NameInput;
