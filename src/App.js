import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guargarTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarAPI = async () => {
      if(busqueda === '') return;

      const imagenesPorPagina = 20;
      const key = '21831674-c218983da27969a6591d30035';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&lang=es&page=${paginaActual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado.hits);

      //total paginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guargarTotalPaginas(calcularTotalPaginas);

      const album = document.querySelector('.album');
      album.scrollIntoView({behavior: 'smooth'});
    }
    consultarAPI();
    
  },[busqueda, paginaActual]);

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;
    
    if(nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);
  }

  const paginaSiguiente= () => {
    const nuevaPaginaActual = paginaActual + 1;
    
    if(nuevaPaginaActual > totalPaginas) return;

    guardarPaginaActual(nuevaPaginaActual);
  }
  

  return (
    <div className="container">
      <div className="p-5 mb-4 bg-light rounded-3">
        <p className="lead text-center">Buscador de imágenes</p>
        <Formulario 
          guardarBusqueda={guardarBusqueda}
        />
      </div>
      <div className="album py-5 bg-light">
        <div className="container">
          <ListadoImagenes imagenes={imagenes} />
        </div>
        <div className="col text-center mt-2">
          {(paginaActual === 1) ? null : (
            <button
              type="button"
              className="bbtn btn-info mr-1"
              onClick={paginaAnterior}
            >&laquo; Anterior</button>
          )}

          {(paginaActual === totalPaginas) ? null : (
            <button
              type="button"
              className="bbtn btn-info ml-1"
              onClick={paginaSiguiente}
            >Siguiente &raquo;</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
