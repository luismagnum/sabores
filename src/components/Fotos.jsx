import React, { useState } from 'react';
import { TfiAngleDoubleLeft, TfiAngleDoubleRight} from "react-icons/tfi";
import { RxDotFilled } from "react-icons/rx";

const Fotos = () => {
    const slides = [
        {
            url:'https://media.istockphoto.com/id/1402776309/es/foto/empanadas-fritas.webp?b=1&s=170667a&w=0&k=20&c=ve1QQtAfMsIqIjv4ynsd6DpyW8YGnTY24ouUkAHwtZ4=',title: 'tequeños',
        },
        {
            url:'https://media.istockphoto.com/id/1461055469/es/foto/teque%C3%B1os-o-dedos-de-queso.jpg?s=612x612&w=0&k=20&c=bYU-KNXETU6zkFQvB92F5eJZMXZdtJh08MoXcZgDjVU=',title:'empanadas',
        },
        {
            url:'https://media.istockphoto.com/id/542696446/es/foto/tres-pasteles-de-leche-con-coco-postre-tradicional-de-am%C3%A9rica-latina.webp?b=1&s=170667a&w=0&k=20&c=gRsvHECIypGfecSfo2-0QqKucndOmcJ7O8NBhb8CFvQ=',title:'torta',
        },
        {
            url:'https://media.istockphoto.com/id/1360850364/es/foto/comida-latinoamericana-empanada-venezolana-peluda-carne-desmenuzada-con-queso-amarillo.jpg?s=612x612&w=0&k=20&c=XZUdQsiue7mrZx6oCNbM46jrE8tlMyxFKoVmBDkhHpY=',title:'arepas',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    };

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
        <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <TfiAngleDoubleLeft onClick={prevSlide} size={20}/>
        </div>
        <div  className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <TfiAngleDoubleRight  onClick={nextSlide} size={20}/>  
        </div>
        <div className='flex top-4 justify-center py-2'>
         {slides.map((slide, slideIndex )=>(
            <div className='text-2xl cursor-pointer' key={slideIndex} onClick={()=> goToSlide(slideIndex)}>
             <RxDotFilled />   
            </div>
         ))}
        </div>
    </div>
  );
};

export default Fotos
