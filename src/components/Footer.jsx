import React from 'react';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import logo from '../image/logo.svg';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='bg-black text-white rounded-t-3xl mt-8 md:mt-0'>
      <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
        <div className='w-full md:w-1/4'>
            <h1 className='text-teal-500 font-semibold text-xl pb-4'>Sabores de Venezuela</h1>
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
          <div className='flex flex-row items-center justify-center gap-6'>
          <button className='flex border-2 border-black bg-black p-2 rounded-full text-white gap-4'>
            <a className="text-teal-500 text-4xl hover:text-teal-800 " href="https://wa.me/542984417477?text=Hola quiero hacer un pedido " target="_blank"><FaWhatsappSquare /></a>
            <a className="text-teal-500 text-4xl hover:text-teal-800" href="https://www.facebook.com/profile.php?id=100063541335021" target="_blank"><FaFacebookSquare /></a>
            <a className="text-teal-500 text-4xl hover:text-teal-800" href="https://www.instagram.com/saboresdevenezuela2020?igshid=NjlwNzlyMDk2Mg==" target="_blank"><FaInstagramSquare /></a>
          </button>
          </div>
          <div className='flex items-center justify-center'>
            <button className='grid grid-cols-1'>
              <a className='flex text-center text-teal-500 font-semibold text-2xl hover:text-teal-800' href='#Seccion1'>HOME</a>
            </button>
          </div>
      <div>
       <p className='text-center text-sm py-4'>
        @Sabores de Venezuela 2023<br></br>
        <span className='text-teal-500'>Developer Luis Enrique Diaz </span>
       </p>
      </div>
      <br></br>
    </div>
  )
}

export default Footer
