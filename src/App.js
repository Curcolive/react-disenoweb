import React, { useState } from 'react';

// --- Componente Titulo ---
function Titulo() {
  return (
    <div className="text-center p-5 mb-5 bg-dark text-white rounded-3 shadow-lg">
      <h1 className="display-4 fw-bolder">Mi Perfil Profesional</h1>
      <p className="lead fw-normal mt-2">Practicando los fundamentos de React.js</p>
    </div>
  );
}

// --- Componente TarjetaDePerfil ---
function TarjetaDePerfil({ usuario }) {
  const { nombre, profesion, edad, avatar } = usuario;

  return (
    // Se añade un efecto de sombra más grande y un borde sutil
    <div className="card text-white bg-dark shadow-lg border border-secondary h-100">
      <div className="d-flex justify-content-center mt-4">
        <img src={avatar} className="card-img-top rounded-circle border border-primary border-4" alt={`Avatar de ${nombre}`} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
      </div>
      <div className="card-body text-center d-flex flex-column">
        <h2 className="card-title h1 text-primary fw-bold mt-3">{nombre}</h2>
        <p className="card-text fs-4 flex-grow-1">{profesion}</p>
        <p className="card-text text-white-50 mt-2">Edad: {edad} años</p>
      </div>
    </div>
  );
}

// --- Componente ListaDeHabilidades ---
function ListaDeHabilidades({ habilidades }) {
  return (
    // Se añade un efecto de transición para una aparición suave
    <div className="card bg-dark shadow-lg mt-4 w-100 border border-secondary animate__animated animate__fadeIn">
      <div className="card-body p-4">
        <h3 className="card-title text-center text-white mb-4 h4">Habilidades Técnicas</h3>
        {habilidades.length > 0 ? (
          <ul className="list-group list-group-flush">
            {habilidades.map((habilidad, index) => (
              <li key={index} className="list-group-item bg-transparent text-white border-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill me-2 text-primary" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                {habilidad}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-white-50 fst-italic">No hay habilidades para mostrar.</p>
        )}
      </div>
    </div>
  );
}

// --- Componente Principal App ---
export default function App() {
  // Datos del usuario
  const usuarioPerfil = {
    nombre: "Carlos Abalos",
    profesion: "Desarrollador Web Full-Stack",
    edad: 29,
    avatar: 'https://placehold.co/150x150/0D6EFD/FFFFFF?text=AT&font=lora'
  };

  // Estado para la visibilidad
  const [mostrarLista, setMostrarLista] = useState(true);
  
  const toggleVisibilidadLista = () => {
    setMostrarLista(!mostrarLista);
  };

  // Arreglo de habilidades
  const misHabilidades = ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3 & Bootstrap 5', 'Node.js'];

  return (
    <div className="bg-dark min-vh-100 py-5 text-light">
      <div className="container">
        <Titulo />

        <div className="row g-5 justify-content-center align-items-stretch">
          {/* Columna para la Tarjeta de Perfil */}
          <div className="col-lg-5 col-md-8">
            <TarjetaDePerfil usuario={usuarioPerfil} />
          </div>

          {/* Columna para el botón y la lista de habilidades */}
          <div className="col-lg-5 col-md-8">
            <div className="d-flex flex-column align-items-center h-100">
              <button
                onClick={toggleVisibilidadLista}
                className="btn btn-primary btn-lg w-100 shadow-lg"
              >
                {mostrarLista ? 'Ocultar Habilidades' : 'Mostrar Habilidades'}
              </button>

              {/* El renderizado condicional envuelve la lista */}
              {mostrarLista && <ListaDeHabilidades habilidades={misHabilidades} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}