import React from 'react'
import Button from '../layouts/Button';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url(https://media.istockphoto.com/id/1280159987/es/foto/empanadas-or-empanadillas.jpg?s=612x612&w=0&k=20&c=ImyJmRnWGQWZBXYhaz8S0ebnDVns8x3cA9KQsjLKVVo=)] bg-cover bg-no-repeat' id='Seccion1'>
      <div className='w-full lg:w-2/3 space-y-5'>
        <h1 className='text-black-500 font-bold text-4xl'>Empanadas y tequeños venezolanos</h1>
        <p className='text-white text-xl'>
            Las Empanadas Venezolanas es un envoltorio de masa de maiz con un relleno
            que puede ser de carne, pollo o queso cuya coccion es frita.
        </p>
        <div className='lg:pl-44'>
           <button className='border-2 border-black bg-black p-2 rounded-full text-white'>
             <a href="https://wa.me/542984417477?text=Hola quiero hacer un pedido " target="_blank">Encargar ahora</a>
           </button>
       </div>
      </div>
    </div>
  )
}

export default Home
