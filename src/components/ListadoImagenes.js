import React from 'react';
import Imagen from './Imagen';

const ListadoImagenes = ({imagenes}) => {
    if (Object.keys(imagenes).length === 0) return null;
    return ( 
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {imagenes.map(imagen => (
                <Imagen 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
     );
}
 
export default ListadoImagenes;