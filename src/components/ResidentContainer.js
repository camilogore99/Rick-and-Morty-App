import React, { useEffect, useState } from 'react'
import { requests } from '../request/requests'
import ResidentInfo from './ResidentInfo'

const ResidentContainer = ( { url } ) => {
   
   // Creamos los hooks de estados  // 
   const [name, setName] = useState('');
   const [urlImg, setUrlImg] = useState('');
   const [status, setStatus] = useState('');
   const [origin, setOrigin] = useState('');
   const [episodes, setEpisodes] = useState('');

   useEffect(() => {
      // oeticion que nos trae la informacion
      requests( url ).then((data) => {
         setName(data.name);
         setUrlImg(data.image);
         setStatus(data.status);
         setOrigin(data.origin.name);
         setEpisodes(data.episode.length);
      });
   }, [url]);

   return (
      <>
         <ResidentInfo 
          name={name}
          urlImg={urlImg}
          status={status} 
          origin={origin} 
          episodes={episodes} 
         />
      </>
   );
};

export default ResidentContainer;