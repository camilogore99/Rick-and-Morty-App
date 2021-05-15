import React from 'react'

const Error = ( { ubication } ) => {
   return (
      <div className="card-error">
         <div className="card-body" > 
         <h3>" Lo sentimos la ubicacion {ubication} no existe "</h3>
         </div>
      </div>
   )
}

export default Error
