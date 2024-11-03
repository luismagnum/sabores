import React from 'react'
import img2 from '../image/palitos.png'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-40 px-5 '>
      <img src={img2} alt='img2' width={350}/>

      <div className='space-y-9 lg:pt-2'>
        <h1 className='font-semibold text-4xl text-center'>Los Tequeños</h1>
        <p className='text-justify'>Los Tequeños Venezolanos son una masa de harina de trigo frita
           rellena de queso, jamon y queso o algun otro ingrediente de su
           agrado. Se pueden servir solos o acompañados por alguna salsa. Son la delicia
           de grandes y chicos. Ideales para compartir. No pueden faltar en una reunion, fiesta
           de cumpleaños o juntadas con amigos. <span className='font-bold'> Deliciosos!</span>
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

export default About
