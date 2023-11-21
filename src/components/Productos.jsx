import React from 'react'
import DishesCard from '../layouts/DishesCard'
import img1 from "../image/img1.png"

const Productos = () => {
  return (
    <div className='min-h-screenflex flex-col justify-center items-center lg:px-32 px-5 '>
      <h1 className='text-4xl font-semibold text-center pt-24 pb-10'>Nuestras Comidas</h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        <DishesCard img={img1} title="empanadas" price="$4500" />
        <DishesCard img={img1} title="empanadas" price="$4500" />
        <DishesCard img={img1} title="empanadas" price="$4500" />
        <DishesCard img={img1} title="empanadas" price="$4500" />
        <DishesCard img={img1} title="empanadas" price="$4500" />
        <DishesCard img={img1} title="empanadas" price="$4500" />
      </div>
    </div>
  )
}

export default Productos
