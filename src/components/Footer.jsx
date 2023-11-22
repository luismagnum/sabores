import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white rounded-t-3xl mt-8 md:mt-0'>
      <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
        <div className='w-full md:w-1/4'>
            <h1 className='font-semibold text-xl pb-4'>Sabores de Venezuela</h1>
            <p className='text-sm'>Los principales platos que se deben probar
            para dar fiesta al paladar y transportarse al caribe venezolano son:
            las arepas, las empanadas y los tequeños.
            </p>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Empanadas</h1>
            <nav className='flex flex-col gap-2'>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Carne</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Carne c/queso</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Pollo</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Pollo c/queso</a>
            </nav>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Tequeños</h1>
            <nav  className='flex flex-col gap-2'>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Queso</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Jamon c/queso</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Torta 3 leches</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Combo tropical</a>
            </nav>
        </div>
      </div>
      <div>
       <p className='text-center py-4'>
        @Sabores de Venezuela 2023 developer by
        <span className='text-teal-500'> Luis Enrique Diaz </span>
       </p>
      </div>
      <br></br>
    </div>
  )
}

export default Footer
