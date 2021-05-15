import React, { useState } from 'react'

const SearchBox = ( { setvalueInput } ) => {

   const [valueInput, setValueInput] = useState('')
   
   return (
      <div>
         <input
           type="text"
           value={valueInput}
           onChange={(e) => setValueInput(e.target.value ) }
         />
         <button onClick={ () => setvalueInput(valueInput) } >Search</button>
      </div>
   )
}

export default SearchBox
