import React from 'react';
import DishesCard from '../layouts/DishesCard';
import im7 from '../image/im7.png';
import im8 from '../image/im8.png';
import im9 from '../image/im9.png';

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10'>Combos<span className='text-sm'></span></h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        <DishesCard img={im8} title="6 empanadas 6 tequeños 1 salsa de ajo" price="$10000" />
        <DishesCard img={im7} title="4 empanadas 4 tequeños 1 salsa de ajo" price="$8500" />
        <DishesCard img={im9} title="6 pastelitos 6 tequeños 1 salsa de ajo" price="$10000" />
      </div>
    </div>
  )
}

export default Menu
