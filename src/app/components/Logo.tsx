// src/app/components/Logo.tsx
import Image from 'next/image';
import React from 'react';

export default function Logo() {
  return (
    <div className="w-full flex justify-end mr-[14%]">
      <Image
        src="/logo2.png" // Ruta de tu logo (debe estar en la carpeta public)
        alt="Logo de la empresa" // Mejor descripción para accesibilidad
        width={120} // Ancho del logo
        height={60} // Alto del logo
        priority // Prioriza la carga del logo si es importante
      />
    </div>
  );
}