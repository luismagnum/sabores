import React from 'react'

const Home = () => {
  return (
    <div className=' w-full h-80 md:min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-[url(https://media.istockphoto.com/id/491098592/es/foto/pastel-polenta-frito.jpg?s=612x612&w=0&k=20&c=gOu9f4VSMncA9x8fbavdTU48PQjuwZAcjZyz5QZd81g=)] bg-contain md:bg-cover bg-no-repeat wfull'>
      <div className='mb-20'>
        <h1 className='text-[#250608] text-xl  font-bold  md:text-5xl'>Empanada Condor Blue</h1>
        <p className='text-base text-[#1a0f04] md:text-4xl font-bold'>
          pollo <span className='text-sm block text-[#0b2d47] md:text-4xl'>Queso, Jamon y Queso azul</span>
        </p>
      </div>
    </div>
  )
}

export default Home
