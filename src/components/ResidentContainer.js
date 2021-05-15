import React, { useEffect, useState } from 'react'
import ResidentInfo from './ResidentInfo'

const ResidentContainer = ( { url } ) => {
   
   const [name, setName] = useState('')
   const [urlImg, setUrlImg] = useState('')
   const [status, setStatus] = useState('')
   const [origin, setOrigin] = useState('')
   const [episodes, setEpisodes] = useState('')


   useEffect(() => {

      fetch( url )
            .then( (res) => res.json() )
            .then( (data) => {
               setName(data.name)
               setUrlImg(data.image)
               setStatus(data.status)
               setOrigin(data.origin.name)
               setEpisodes(data.episode.length)
            })

   }, [url])


   return (
      <>
         <ResidentInfo name={name}
          urlImg={urlImg}
          status={status} 
          origin={origin} 
          episodes={episodes} 
          />
      </>
   )
}

export default ResidentContainer;