import React, { useState } from 'react'

const SearchBox = ( { setvalueInput } ) => {
   // estado del input 
   const [valueInput, setValueInput] = useState('');
   
   return (
      <div>
         <input
           type="text"
           value={valueInput}
           onChange={(e) => setValueInput(e.target.value ) }
         />
         <button className="btn btn-danger" onClick={ () => setvalueInput(valueInput) } >Search</button>
      </div>
   );
};

export default SearchBox;
