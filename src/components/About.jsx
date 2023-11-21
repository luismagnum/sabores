import React from 'react'
import img2 from '../image/img2.png'
import Button from '../layouts/Button';

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5'>
      <img src={img2} alt='img2'/>

      <div className='space-y-4 lg:pt-14'>
        <h1 className='font-semibold text-4xl text-center text-start'>Los tequeños</h1>
        <p>Los tequeños venezolanos son unos rollos de queso envueltos
           en una fina harina de maiz fritos.
        </p>
        <div className='flex justify-center lg:justify-start'>
            <Button className=" cursor-pointer" title="encargar ahora" />
        </div>
      </div>
    </div>
  )
}

export default About
