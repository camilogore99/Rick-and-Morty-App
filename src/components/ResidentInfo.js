import React from 'react'

const ResidentInfo = ( { name, urlImg, status, origin, episodes } ) => {
   return (
      <div className="column col-8 col-sm-4 col-md-4 col-lg-2 mt-3">
         <div className="card " Style="width: 100%; max-height: 20rem;">
            <img src={urlImg} alt={name} Style="width: 100%; height: 10rem;" className="card"/>
            <h5 Style="color: black;">{name}</h5>
            <div className="items">
               <ul Style="list-style: none;" >
                  <li>Status: {status}</li>
                  <li>Origin: {origin}</li>
                  <li>Episodes: {episodes}</li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default ResidentInfo
