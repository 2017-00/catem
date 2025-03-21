// pages/login/trabajador.js
import Link from 'next/link';
import Image from 'next/image';
import Logo from '.././components/Logo';

export default function LoginTrabajador() {
  return (
    <div className="w-full bg-gray-100 text-gray-800 flex flex-col justify-center items-center min-h-screen">
      <Logo />

      {/* Contenedor principal */}
      <div className="w-full max-w-6xl bg-white p-8 rounded-xl shadow-lg flex flex-row gap-6">
        {/* Div de la izquierda (20% ancho, 80% alto) */}
        <div className="w-1/5 h-[80vh] overflow-y-auto flex flex-col gap-4">
          {/* Miniaturas de imágenes (estáticas) */}
          <div className="cursor-pointer hover:opacity-75">
            <Image
              src="/image1.jpg" // Ruta de la imagen en la carpeta public
              alt="Imagen 1"
              width={100}
              height={100}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="cursor-pointer hover:opacity-75">
            <Image
              src="/image2.jpg" // Ruta de la imagen en la carpeta public
              alt="Imagen 2"
              width={100}
              height={100}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="cursor-pointer hover:opacity-75">
            <Image
              src="/image3.jpg" // Ruta de la imagen en la carpeta public
              alt="Imagen 3"
              width={100}
              height={100}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Div del centro (45% ancho, 80% alto) */}
        <div className="w-[45%] h-[80vh] flex justify-center items-center bg-gray-200 rounded-lg">
          {/* Imagen seleccionada (estática) */}
          <Image
            src="/image1.jpg" // Ruta de la imagen en la carpeta public
            alt="Imagen seleccionada"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Div de la derecha (30% ancho, 80% alto) */}
        <div className="w-[30%] h-[80vh] flex flex-col gap-6">
          {/* Campo de número de placa */}
          <div className="flex flex-col gap-2">
            <label htmlFor="placa" className="text-lg font-semibold text-gray-700">
              Número de Placa
            </label>
            <input
              type="text"
              id="placa"
              name="placa"
              placeholder="Ingresa el número de placa"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Campo de descripción del trabajo */}
          <div className="flex flex-col gap-2">
            <label htmlFor="descripcion" className="text-lg font-semibold text-gray-700">
              Descripción del Trabajo
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              placeholder="Describe el trabajo a realizar"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>

          {/* Campo de costo del trabajo */}
          <div className="flex flex-col gap-2">
            <label htmlFor="costo" className="text-lg font-semibold text-gray-700">
              Costo del Trabajo
            </label>
            <input
              type="number"
              id="costo"
              name="costo"
              placeholder="Ingresa el costo del trabajo"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Botón de enviar */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-blue-600 transition-all"
          >
            Enviar
          </button>
        </div>
      </div>

      {/* Enlace para volver a la página principal */}
      <div className="mt-6 text-center">
        <Link href="/" legacyBehavior>
          <a className="text-blue-500 hover:text-blue-600 transition-all">
            Volver a la página principal
          </a>
        </Link>
      </div>
    </div>
  );
}