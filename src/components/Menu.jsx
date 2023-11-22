import React from 'react';
import DishesCard from '../layouts/DishesCard';
import img2 from '../image/img2.png';

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10'>menu</h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        <DishesCard img={img2} title="empanadas" price="$4500" />
        <DishesCard img={img2} title="tequeños" price="$4500" />
        <DishesCard img={img2} title="salsa de ajo" price="$4500" />
      </div>
    </div>
  )
}

export default Menu
