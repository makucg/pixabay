import React from 'react';

const Imagen = ({imagen}) => {
    return ( 
        
        <div className="col">
          <div className="card shadow-sm">
                <img 
                    src={imagen.previewURL} 
                    alt={imagen.tags}
                />

                <div className="card-body">
                    <h5 className="card-title">{imagen.tags}</h5>
                    <p className="card-text">Descargas: {imagen.downloads}</p>
                    <p className="card-text">Favoritos: {imagen.favorites}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">Usuario: {imagen.user}</small>
                        <div className="btn-group">
                            <a 
                                href={imagen.largeImageURL} 
                                className="btn btn-sm btn-outline-secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Ver imagen</a>
                        </div>
                    </div>
                </div>
        </div>
      </div>
     );
}
 
export default Imagen;