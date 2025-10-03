import React from 'react';
import './App.css';
import Carousel from './components/slider';
import Search from './components/searchBar';

function App() {
  return (
    <div className="App">
      
      {/* FILA 1: Géneros */}
      <div className="fila fila-generos">
        {/* <p>🎶 Sección de géneros</p> */}
        <Carousel />
      </div>

      <Search/>

      {/* FILA 2: Canciones (izq) + Detalle (der) */}
      <div className="fila fila-musica">
        <div className="columna canciones">
          <p>📃 Listado de canciones</p>
        </div>
        <div className="columna detalle">
          <p>🎧 Detalle de canción seleccionada</p>
        </div>
      </div>

      {/* PIE DE PÁGINA: Créditos */}
      <div className="pie">
        <p>💰 Créditos restantes: 0</p>
      </div>
    </div>
  );
}

export default App;
