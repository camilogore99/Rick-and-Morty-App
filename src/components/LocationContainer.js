import React, { useEffect, useState } from 'react';
import { requests } from '../request/requests';
import Error from './Error';
import LocationInfo from './LocationInfo';
import ResidentContainer from './ResidentContainer';
import SearchBox from './SearchBox';

const LocationContainer = () => {

   // Generamos una funcion para traer ubicaciones aleatorias
   const getRandomNum = (min, max) => {
      return Math.random() * (max - min) + min;
   }
   
   // Creamos los hooks de estados  // 
   const [nameLocation, setNameLocation] = useState('');
   const [typeLocation, setTypeLocation] = useState('');
   const [dimension, setDimension] = useState('');
   const [numResidents, setNumResidents] = useState(0);
   const [flagError, setFlagError] = useState(false);
   const [residents, setResidents] = useState([]);
   const [valueInput, setvalueInput] = useState(null);

   useEffect(() =>  {
      // obtenmos las ubicaciones segun lo que escriba el usuario 
      if (valueInput) {
         // url Api 
         const url = `https://rickandmortyapi.com/api/location/?name=${valueInput}`;
         // estado que maneja el error;
         setFlagError(false);
         // request funcion encargada de hacer la peticion
         requests(url).then(data => {
            if (data.results === undefined) {
               // Manejamosel error si el usuario busca un dimension equivocada 
               setFlagError(true);
            }else {
               // Hacemos los cambios de estado con la informacion  
               setNameLocation( data.results[0].name );
               setTypeLocation( data.results[0].type );
               setDimension( data.results[0].dimension );
               setNumResidents( data.results[0].residents.length );
               setResidents(data.results[0].residents.slice(0, 6));
            };
         });
      } else {

         // si el susuario no a agregado nada traemos la ubicacion aleatoriamente 
         const url = `https://rickandmortyapi.com/api/location/${Math.round(getRandomNum(1,100))}`;
         requests(url).then(data => {
            // Hacemos los cambios de estado con la informacion
            setNameLocation( data.name );
            setTypeLocation( data.type );
            setDimension( data.dimension );
            setNumResidents( data.residents.length );
            setResidents( data.residents.slice(0, 6));
         });
      };
   }, [valueInput]);

   // Generamos un map de todos los residentes 
   const list = residents.map(( value, index ) => {
      return <ResidentContainer  url={value} key={index} />
   });
   
   // renderizado // 
   return (
      <>
         <div className="row">
            <div className="col-md-7">
               <h1>Rick and Morty App</h1>
               <div className="row mt-4">
                  <h6>Write the name of the location </h6>
                  <SearchBox setvalueInput={setvalueInput} />
               </div>
            </div>
            <div className="col-md-4 col-sm-6">
               <div className="card-info">
                  <div className="box">
                     <LocationInfo 
                     name={nameLocation}
                     type={typeLocation} 
                     dimension={dimension} 
                     cantResident={numResidents} 
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="container-cards">
               <div className="row">
                     {flagError ? <Error ubication={valueInput} />  : list }
               </div>
            </div>
         </div>         
      </>
   );
};

export default LocationContainer;
