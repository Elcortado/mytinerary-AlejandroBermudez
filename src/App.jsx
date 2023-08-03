import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-white flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-0 xl:justify-between w-full p-4">
  <div>
    <h1 className="text-3xl font-bold text-gray-900">Brand</h1>
  </div>
  <div>
    <p className="text-gray-800 text-center md:text-left">
      &copy; 2022
      <span className="text-gray-900 font-bold">JT Devs.</span> Todos
      los derechos reservados.
    </p>
  </div>
  <div className="flex flex-col xl:flex-row items-center gap-2">
    <a
      href="#"
      className="text-gray-700 hover:text-gray-900 transition-colors"
    >
      Terminos y condiciones
    </a>
    <span className="hidden xl:flex">|</span>
    <a
      href="#"
      className="text-gray-700 hover:text-gray-900 transition-colors"
    >
      Política de privacidad
    </a>
  </div>
</div>
    </>
  )
}

export default App
