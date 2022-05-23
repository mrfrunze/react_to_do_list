import React from 'react'

export const SearchItem = ({ search, setSearch }) => {
   return (
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
         <label htmlFor="search">Search Item</label>
         <input 
            type="text"
            role='searchbox'
            id='search'
            className='inputText'
            autoFocus
            placeholder='Search Item'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />
      </form>
   )
}

export default SearchItem;