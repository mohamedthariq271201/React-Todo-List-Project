import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Additem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className='addform' onSubmit={handleSubmit}>
      <label htmlFor='additem'>Add Item</label> 
      <input 
        autoFocus
        id='additem'
        type='text'
        placeholder='Add item'
        required 
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type='submit'
        aria-label='Add item'
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default Additem;
