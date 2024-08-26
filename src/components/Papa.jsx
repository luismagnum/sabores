import React from 'react'

const Home = () => {
  return (
    <div className=' w-full h-80 md:min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-[url(https://media.istockphoto.com/id/1402776309/es/foto/empanadas-fritas.jpg?s=612x612&w=0&k=20&c=VRk2FXIefnM6MZcnyxuGmLBDF7zZAhaNgh14qhbFEE0=)] bg-contain md:bg-cover bg-no-repeat wfull'>
      <div className='mb-20'>
        <h1 className='text-[#fff] text-xl  font-bold  md:text-5xl'>Ricas Empanadas</h1>
        <p className='text-xl text-[#fff] md:text-4xl font-bold'>
          Y deliciosos<span className='text-xl block text-[#fff] md:text-4xl'>Tequeños</span>
        </p>
      </div>
    </div>
  )
}

export default Home
