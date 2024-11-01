import React from 'react'
import img2 from '../image/palitos.png'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 '>
      <img src={img2} alt='img2' width={400}/>

      <div className='space-y-5 lg:pt-20'>
        <h1 className='font-semibold text-4xl text-start'>Los tequeños</h1>
        <p>Los Tequeños Venezolanos son una masa de harina de trigo frita
           rellena de queso, jamon y queso o algun otro ingrediente de su
           agrado. Se pueden servir solos o acompañados por alguna salsa.
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
