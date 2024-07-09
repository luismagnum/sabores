import React from 'react'

const Home = () => {
  return (
    <div className=' w-full h-80 md:min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-[url(https://thumbs.dreamstime.com/b/puma-cumbre-official-ball-conmebol-copa-america-soccer-miami-florida-united-states-may-317641402.jpg)] bg-contain md:bg-cover bg-no-repeat wfull'>
      <div className='mb-20'>
        <h1 className='text-[#f8be1e] text-xl  font-bold  md:text-5xl'>Empanada Condor Blue</h1>
        <p className='text-xl text-[#26599c] md:text-4xl font-bold'>
          Pollo <span className='text-xl block text-[#a90206] md:text-4xl'>Queso y Jamon.</span>
        </p>
      </div>
    </div>
  )
}

export default Home
