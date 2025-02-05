import React from 'react'
import DishesCard from '../layouts/DishesCard'
import img1 from "../image/im1.png"
import img2 from "../image/im2.png"
import img3 from "../image/im3.png"
import img5 from "../image/im5.png"
import img6 from "../image/im6.png"
import img13 from "../image/img13.png"

const Productos = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 '>
      <h1 className='text-4xl font-bold text-center pt-2 md:pt-14 pb-10'>Nuestras Comidas</h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        <DishesCard img={img1} title="empanadas 12u" price="$18000" />
        <DishesCard img={img2} title="tequeños 12u" price="$12000" />
        <DishesCard img={img3} title="minitequeños 50u" price="$19000" />
        <DishesCard img={img13} title="pastelitos 12u" price="$12000"/>
        <DishesCard img={img5} title="salsa de ajo" price="$1200" />
        <DishesCard img={img6} title="torta 3 leches" price="$6500" />
      </div>
    </div>
  )
}

export default Productos
