import React from 'react'

const Home = () => {
  return (
    <div className=' w-full h-80 md:min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-[url(https://media.istockphoto.com/id/1492368317/es/foto/elegante-concepto-del-d%C3%ADa-del-padre-toma-de-vista-superior-de-taza-de-caf%C3%A9-corbata-pajarita.jpg?s=612x612&w=0&k=20&c=Cd5wGPOIKnCNpEh7BfydSIUEbhjowf1Qfp9fqIUrJVo=)] bg-contain md:bg-cover bg-no-repeat wfull'>
      <div className='mb-20'>
        <h1 className='text-[#c4000d] text-xl  font-bold  md:text-5xl'>Feliz día del Padre</h1>
        <p className='text-base text-[#ff7a00] md:text-2xl font-bold'>
          les desea <span className='text-sm block text-[#0b2d47] md:text-4xl'> Sabores de Venezuela</span>
        </p>
      </div>
    </div>
  )
}

export default Home
