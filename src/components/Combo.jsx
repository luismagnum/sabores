import React from 'react'
import im10 from '../image/im10.png'
import Button from '../layouts/Button';

const Combo = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5'>
      <img src={im10} alt='img2'/>

      <div className='space-y-6 lg:pt-14'>
        <h1 className='font-semibold text-4xl text-start'>Combo Arepero</h1>
        <p>  El Combo arepero consta de 3 arepas,
            3 empanadas,6 tequeños y 1 salsa de ajo.
            El precio del combo es <span className='text-black font-semibold'>$8000.</span>
        </p>
        <div className='flex justify-center lg:justify-start'>
        <button className='border-2 border-black bg-black p-2 rounded-full text-white'>
             <a href="https://wa.me/542984417477?text=Hola quiero hacer un pedido" target="_blank">Encargar ahora</a>
           </button>
        </div>
      </div>
    </div>
  )
}

export default Combo
