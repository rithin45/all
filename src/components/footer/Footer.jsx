// import React from 'react'
// import './Footer.css'
// const Footer = () => {
//   return (
//     <div id ="root">
    
//       <footer>
//         <p>&copy;E Grocery shop  </p>
//       </footer>
      
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
       <h4>
         &copy; Grocery Mart {new Date().getFullYear()}
       </h4>
    </div>
  );
};

export default Footer;
