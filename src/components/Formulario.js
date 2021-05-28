import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({guardarBusqueda}) => {

    const [termino, guardarTermino] = useState('');
    const [error, guardarError] = useState(false);

    const buscarImagenes = (e) => {
        e.preventDefault();

        //Validar 
        if (termino.trim() === '') {
            guardarError(true);
            return;
        }

        //enviar termino de busqueda al principal
        guardarError(false);
        guardarBusqueda(termino);

    }
    
    return ( 
        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejemplo: fútbol o café"
                        onChange={e => guardarTermino(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4 d-grid gap-2">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger"
                    />
                </div>
            </div>
            {error ? <Error mensaje="Agrega un término de búqueda" /> : null}
        </form>
     );
}
 
export default Formulario;