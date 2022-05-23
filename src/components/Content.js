import React from 'react';
import ItemList from './ItemList';

export const Content = ( {items, handleCheck, handleDelete} ) => {

  return (
    <main >
       {items.length ? (
            <ItemList 
               items={items}
               handleCheck={handleCheck}
               handleDelete={handleDelete}
            />
      ) : (
         <h2 className='text-al-c'> Your list is empty !</h2>
      )
   }
    </main>
  )
}

export default Content;
