import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-80  md:min-h-screen  flex flex-col justify-center items-center lg:px-32 px-5 bg-[url(https://media.istockphoto.com/id/1280159987/es/foto/empanadas-or-empanadillas.jpg?s=612x612&w=0&k=20&c=ImyJmRnWGQWZBXYhaz8S0ebnDVns8x3cA9KQsjLKVVo=)] bg-contain md:bg-cover bg-no-repeat'>
      <div className='w-full lg:w-2/3 space-y-5'>
        <h1 className='text-red-800 font-bold text-xl md:text-4xl'></h1>
        <p className='hidden:sm text-white text-sm md:text-xl font-bold'>
            Las Empanadas Venezolanas son un envoltorio de masa de maiz con un relleno
            que puede ser de carne, pollo o queso cuya coccion es frita.
        </p>
        
      </div>
    </div>
  )
}

export default Home
