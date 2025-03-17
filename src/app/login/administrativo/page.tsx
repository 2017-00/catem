// pages/login/trabajador.js
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../components/Logo';

export default function LoginTrabajador() {
  return (
    <div className="w-full bg-gray-100 text-gray-800 flex flex-col justify-center items-center min-h-screen">
    <Logo/>

      {/*<h1 className="text-3xl font-bold text-gray-900 mb-5">Inicio de Sesión - Trabajador</h1>*/}

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
              <Image
                src="/computer-icon-negro.png" // Ruta de la imagen del trabajador (debe estar en la carpeta public)
                alt="icono de trabajador"
                width={80} // Ancho de la imagen
                height={80} // Alto de la imagen
              />

        {/* Formulario de inicio de sesión */}
        <form className="w-full flex flex-col gap-6">
          {/* Campo de correo electrónico */}
          <div className="flex flex-col gap-2">
            <label htmlFor="usuario" className="text-lg font-semibold text-gray-700">
              Usuario
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Ingresa tu nombre de usuario"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Campo de contraseña */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-lg font-semibold text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Botón de inicio de sesión */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-blue-600 transition-all"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Enlace para volver a la página principal */}
        <div className="mt-6 text-center">
          <Link href="/" legacyBehavior>
            <a className="text-blue-500 hover:text-blue-600 transition-all">
              Volver a la página principal
            </a>
          </Link>
        </div>

        
      </div>
    </div>
  );
}