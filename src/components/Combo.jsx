import React from 'react'
import img14 from '../image/img14.png'

const Combo = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mb-6 gap-10'>
      <img src={img14} alt='img2' width={350}/>

      <div className='space-y-6 lg:pt-2'>
        <h1 className='font-semibold text-4xl text-center'>Pastelitos</h1>
        <p>Los pastelitos venezolanos son deliciosos bocados fritos o al horno,
           hechos con masa de harina de trigo y rellenos con una variedad de
           ingredientes. Los rellenos más comunes incluyen carne molida sazonada,
           pollo desmenuzado, queso blanco rallado. 
            <span className='text-black font-semibold'>Deliciosos!</span>
        </p>
        <div className='flex justify-center lg:justify-start'>
        <button className='border-2 border-black bg-black p-2 rounded-full text-white'>
             <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank">Encargar ahora</a>
           </button>
        </div>
      </div>
    </div>
  )
}

export default Combo
