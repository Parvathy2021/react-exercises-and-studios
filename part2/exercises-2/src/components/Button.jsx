import './styles.css';
import React from 'react';

function Button() {
   const onLearnMore = ()=>{
    alert("Slipsh Splash");
   }

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}


export default Button;
