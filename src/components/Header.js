import React from 'react';

export const Header = ( {title} ) => {
  return (
    <div className='header text-al-c'>
       <h1>{title}</h1>
       <h3>add something</h3>
    </div>
  )
}

Header.defaultProps = {
   title:"React project"
}

export default Header;
