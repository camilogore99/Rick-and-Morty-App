import React from 'react'

const LocationInfo = ({ name, type, dimension, cantResident }) => {
   return (
      <>
      <ul Style="list-style: none;" >
         <li>Name: {name}</li>
         <li>Type: {type}</li>
         <li>Dimension: {dimension}</li>
         <li>Residents: { cantResident }</li>
      </ul>
      </>
   )
}

export default LocationInfo
