import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import Button from '../layouts/Button';

const DishesCard = (props) => {
  return (
    <div className='w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg'>
      <img className="rounded-xl" src={props.img} alt='img'/>
      <div className='space-y-4'>
        <h3 className='font-semibold text-center text-xl pt-6'>{props.title}</h3>
        <div className='flex flex-row justify-center'>
            <RiStarSFill className='text-teal-500' />
            <RiStarSFill className='text-teal-500'/>
            <RiStarSFill className='text-teal-500'/>
            <RiStarSFill className='text-teal-500'/>
            <RiStarSFill className='text-teal-500'/>
        </div>
        <div className='flex flex-row items-center justify-center gap-4'>
            <h3 className='font-semibold text-lg'>{props.price}</h3>
            <button className='border-2 border-black bg-black p-2 rounded-full text-white'>
             <a href="https://wa.me/542984417477?text=Hola quiero hacer un pedido " target="_blank">Encargar ahora</a>
           </button>
        </div>
      </div>
    </div>
  )
}

export default DishesCard
