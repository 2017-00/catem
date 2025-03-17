// pages/index.js
import Link from 'next/link';
import Image from 'next/image'; // Importamos el componente Image de Next.js
import Logo from './components/Logo';

export default function Home() {
  return (
<div className="w-full pb-[13%] bg-gray-100 text-gray-800 p-2 flex flex-col justify-center items-center min-h-screen">
  <Logo />

      <h1 className="text-3xl font-bold text-gray-900 mb-5">Bienvenido</h1>
      <p className="text-2xl font-bold text-gray-900 text-center mb-5">Selecciona la opción adecuada a tu puesto</p>
      {/* Contenedor de las cajas */}
      <main className="w-full max-w-4xl flex flex-col sm:flex-row justify-center gap-6">
        {/* Caja de trabajador */}
        <Link href="/login/trabajador" passHref legacyBehavior>
          <a className="w-full sm:w-[45%] bg-blue-500 p-8 rounded-xl shadow-lg transition-all hover:bg-blue-600 hover:scale-105 cursor-pointer flex flex-col items-center">
            {/* Logo para trabajador */}
            <div className="mb-4">
              <Image
                src="/worker-icon.png" // Ruta de la imagen del trabajador (debe estar en la carpeta public)
                alt="icono de trabajador"
                width={80} // Ancho de la imagen
                height={80} // Alto de la imagen
              />
            </div>
            <p className="text-2xl font-bold text-white text-center">Si eres trabajador</p>
          </a>
        </Link>

        {/* Caja de administrativo */}
        <Link href="/login/administrativo" passHref legacyBehavior>
          <a className="w-full sm:w-[45%] bg-green-500 p-8 rounded-xl shadow-lg transition-all hover:bg-green-600 hover:scale-105 cursor-pointer flex flex-col items-center">
            {/* Imagen de computadora para administrativo */}
            <div className="mb-4">
              <Image
                src="/computer-icon.png" // Ruta de la imagen de la computadora (debe estar en la carpeta public)
                alt="Icono de computadora"
                width={80} // Ancho de la imagen
                height={80} // Alto de la imagen
              />
            </div>
            <p className="text-2xl font-bold text-white text-center">Si eres administrativo</p>
          </a>
        </Link>
      </main>
    </div>
  );
}
