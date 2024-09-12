import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-80 md:min-h-screen flex flex-col justify-start items-start lg:px-32 px-5 bg-[url(https://media.istockphoto.com/id/1461055469/es/foto/teque%C3%B1os-o-dedos-de-queso.jpg?s=612x612&w=0&k=20&c=bYU-KNXETU6zkFQvB92F5eJZMXZdtJh08MoXcZgDjVU=)] bg-contain md:bg-cover bg-no-repeat'>
      <div className='mt-2 md:mt-10 mb-20 flex flex-col md:flex-col text-left items-start'>
        <h1 className='text-[#fff] text-xl font-bold md:text-5xl mb-2 md:mb-0 md:mr-6'>
          Ricas Empanadas
        </h1>
        <p className='text-xl text-[#fff] md:text-4xl font-bold md:mt-1'>
          Y deliciosos
          <span className='text-xl block text-[#fff] md:text-5xl mt-1'>
            Tequeños
          </span>
        </p>
      </div>
    </div>
  )
}

export default Home
