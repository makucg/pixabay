import React from 'react';

const Imagen = ({imagen}) => {
    return ( 
        <img src={imagen.largeImageURL}/>
     );
}
 
export default Imagen;