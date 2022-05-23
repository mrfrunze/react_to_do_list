import React from 'react'

export const Footer = ( {title, length} ) => {
   const toDay = new Date();
  return (
    <footer className='footer'>
       <p className='text-al-c'>{length} List {length === 1 ? 'item' : 'items'} </p>
       <h3 className='text-al-c'>{title}</h3>
       <p className='text-al-c'>Copyright &copy; {toDay.getFullYear()}</p>
    </footer>
  )
}

Footer.defaultProps = {
   title:"Footer title"
}

export default Footer;
