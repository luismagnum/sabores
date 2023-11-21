import React from 'react'
import Button from '../layouts/Button';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url(https://media.istockphoto.com/id/1470757433/es/foto/gujiya-un-holi-indio-refrigerios-especiales.jpg?s=612x612&w=0&k=20&c=S39tgcmcPd5mINaNC0Z2yOI1BFB6TdyJc_ZnLoDg2C0=)] bg-cover bg-no-repeat'>
      <div className='w-full lg:w-2/3 space-y-5'>
        <h1 className='text-black font-semibold text-4xl'>Empanadas y tequeños venezolanos</h1>
        <p className='text-black text-sm'>
            rica comida venezolana para disfrutar en familia con todos en la casa 
        </p>
        <div className='lg:pl-44'>
        <button className='border-2 border-black bg-black p-2 rounded-full text-white'>Encargar ahora</button>
      </div>
      </div>
    </div>
  )
}

export default Home
