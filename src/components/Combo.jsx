import React from 'react'
import img14 from '../image/img14.png'

const Combo = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mb-6 gap-10'>
      <img src={img14} alt='img14' width={1400}/>

      <div className='space-y-9 lg:pt-2'>
        <h1 className='font-semibold text-4xl text-center'>Tequeños Fiesteros</h1>
        <p className='text-justify'>Los Tequeños Fiesteros son ideales para sus cumpleaños, meriendas,
           juntadas con amigos y cualquier ocasion para compartir. Vienen rellenos
           de queso y <span className='font-bold'>congelados</span> para freir en el momento y servir calienticos.
           Su tamaño es de 3cm aprox y vienen en bandejas de 50 unidades. 
          <span className='text-black font-semibold'> Deliciosos!</span>
        </p>
        <div className='flex justify-center lg:justify-start'>
        <button className='border-2 border-black bg-black p-2 rounded-full text-white hover:text-teal-500'>
             <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank">Encargar ahora</a>
           </button>
        </div>
      </div>
    </div>
  )
}

export default Combo
