'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import Logo from '../components/Logo';

export default function Home() {
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Lista de obras
  const obras = [
    { nombre: 'Obra Chamilpa', ruta: '/login/trabajador' },
    { nombre: 'Obra Jiutepec', ruta: '/login/trabajador' },
    { nombre: 'Obra Tres Marias', ruta: '/login/trabajador' },
  ];

  // Filtrar obras basadas en el término de búsqueda
  const filteredObras = obras.filter((obra) =>
    obra.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full pb-[10%] bg-gray-100 text-gray-800 p-2 flex flex-col justify-center items-center min-h-screen">
      {/* Logo */}
      <Logo />

      {/* Título de la página */}
      <h1 className="text-3xl text-left font-bold text-gray-700 mb-5">
        Selecciona la obra a la que deseas agregar una imagen
      </h1>

      {/* Barra de búsqueda */}
      <div className="w-full max-w-4xl mb-8">
        <input
          type="text"
          placeholder="Buscar obra..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Contenedor de las cajas */}
      <main className="w-full max-w-4xl flex flex-col sm:flex-row justify-center gap-6">
        {filteredObras.map((obra, index) => (
          <Link key={index} href={obra.ruta} passHref legacyBehavior>
            <a className="w-full sm:w-[45%] bg-gray-300 p-8 rounded-xl shadow-lg transition-all hover:scale-105 cursor-pointer flex flex-col items-center">
              {/* Ícono de construcción */}
              <div className="mb-4">
                <Image
                  src="/construccion-icon.png" // Ruta de la imagen del trabajador (debe estar en la carpeta public)
                  alt="icono de construcción"
                  width={80} // Ancho de la imagen
                  height={80} // Alto de la imagen
                />
              </div>
              {/* Nombre de la obra */}
              <p className="text-2xl font-bold text-gray-700 text-center">{obra.nombre}</p>
            </a>
          </Link>
        ))}
      </main>

      {filteredObras.length === 0 && (
        <p className="text-gray-700 text-lg">No se encontraron obras.</p>
      )}
    </div>
  );
}