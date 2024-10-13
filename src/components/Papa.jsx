import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-80 md:min-h-screen flex flex-col justify-start items-start lg:px-32 px-5 bg-[url(https://img.freepik.com/foto-gratis/palitos-queso-venezolano-tradicional_23-2149050055.jpg?uid=R93950452&ga=GA1.1.974543645.1689639421&semt=ais_hybrid)] bg-contain md:bg-cover bg-no-repeat bg-bottom' id='Seccion1'>
      <div className='mt-20 md:mt-28 mb-20 flex flex-col md:flex-col text-center items-center'>
        <h1 id='font' className='text-[#ffffff] text-xl font-semibold md:text-5xl mb-2 md:mb-0 md:mr-6'>
          Ricas Empanadas
        </h1>
        <p id='font' className='text-xl text-[#ffffff] md:text-3xl font-bold md:mt-1'>
          Y deliciosos
          <span id='font' className=' text-xl block text-[#ffffff] md:text-5xl mt-1 font-semibold'>
            Tequeños
          </span>
        </p>
      </div>
    </div>
  )
}

export default Home
