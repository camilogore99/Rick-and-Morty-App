import React, { useEffect, useState } from 'react'
import Error from './Error';
import LocationInfo from './LocationInfo';
import ResidentContainer from './ResidentContainer';
import SearchBox from './SearchBox';

const LocationContainer = () => {

   const num = function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
   }

   const [nameLocation, setNameLocation] = useState('');
   const [typeLocation, setTypeLocation] = useState('');
   const [dimension, setDimension] = useState('');
   const [numResidents, setNumResidents] = useState(0);
   const [flagError, setFlagError] = useState(false)
   const [residents, setResidents] = useState([]);
   const [valueInput, setvalueInput] = useState(null)

   useEffect(() => {
      if (valueInput) {
         const url = `https://rickandmortyapi.com/api/location/?name=${valueInput}`
         setFlagError(false)
         fetch( url )
               .then( (res) => res.json() )
               .then( (data) => {
                  if (data.results === undefined) {
                    setFlagError(true)
                  }else {
                     setNameLocation( data.results[0].name )
                     setTypeLocation( data.results[0].type )
                     setDimension( data.results[0].dimension )
                     setNumResidents( data.results[0].residents.length )
                    setResidents(data.results[0].residents.slice(0, 10))
                  }
               })
      } else {
         fetch( `https://rickandmortyapi.com/api/location/${Math.round(num(1,109))}` )
               .then( (res) => res.json() )
               .then( (data) => {
                  setNameLocation( data.name )
                  setTypeLocation( data.type )
                  setDimension( data.dimension )
                  setNumResidents( data.residents.length )
                  setResidents(data.residents.slice(0, 10));
               } )
      }
   }, [valueInput])

   const list = residents.map(( value, index ) => {
      return <ResidentContainer  url={value} key={index} />
   })

   return (
      <div className="container mt-5">
         <div className="row">
            <div className="card-info">
               <div className="box">
                  <LocationInfo name={nameLocation}
                   type={typeLocation} 
                   dimension={dimension} 
                   cantResident={numResidents} 
                  />
               </div>
            </div>
         </div>
         <div>
            <h1>Rick and Morty App</h1>
            <div className="row mt-3">
               <SearchBox setvalueInput={setvalueInput} />
            </div>
            <div className=" mt-5 container-cards">
               <div className="row">
                  {flagError ? <Error ubication={valueInput} />  : list }
               </div>
            </div>
         </div>
      </div>
   )
}

export default LocationContainer
