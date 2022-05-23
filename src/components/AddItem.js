import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

export const AddItem = ({newItem, setNewItem, hadleSubmit }) => {
   const inputRef = useRef();
   return (
      <form className='addForm' onSubmit={hadleSubmit}>
         <label htmlFor="addItem"> add item</label>
         <input 
            type="text"
            autoFocus
            ref={inputRef}
            id='addItem'
            className='inputText'
            placeholder='add item'
            required
            value = {newItem}
            onChange = {(e) => setNewItem(e.target.value)} 
         />
         <button
            type='submit'
            aria-label='Add Item'
            onClick={() => inputRef.current.focus()}
         >
            <FaPlus/>
         </button>
      </form>
   )
}

export default AddItem;
