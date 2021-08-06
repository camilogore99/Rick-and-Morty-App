// Funciones que nos hace las peticiones 
export const requests = async( url ) => {
   const response = await fetch( url );
   const data = response.json();
   return data.then((data) => data);
};
