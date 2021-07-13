import React from 'react'

const ButtonPages = ( { numPages, value, setChangePage } ) => {
   return (
      <div className="buttons-pages">
         <button className="btn btn-danger" onClick={() => setChangePage( value + 1 ) } >{numPages + 1}</button>
      </div>
   )
}

export default ButtonPages
