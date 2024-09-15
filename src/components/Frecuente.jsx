import React, { useState } from 'react';

const faqData = [
    {
        question: "¿Que tipo de harina usan en las empanadas?",
        awnser:"Utilizamos la harina de maiz precocida.",
    },
    {
        question: "¿Que tipo de harina usan en los tequeños?",
        awnser:"Utilizamos harina de trigo 0000 y 000",
    },
    {
        question: "¿Como cocinan los empanadas y tequeños?",
        awnser:"Las empanadas y tequeños son fritos, no horneados",
    },
    {
        question: "¿Nuestras comidas son aptas para celiacos?",
        awnser:"NO lo pueden comer personas celiacas",
    },

]

const Frecuente = () => {
  const [active, setActive] = useState(null)
  const handleClick = (index) =>{
    setActive(index === active ? null: index);
  };
  return (
    <div className='max-w-2xl mx-auto mt-20 mb-28 px-6 md:px-8 py-4'>
      <h1 className='text-3xl text-black text-center font-bold pb-8'>Preguntas frecuentes</h1>
     {faqData.map((item, index) =>(
        <div key={index}>
            <div className="flex justify-between items-center cursor-pointer py-4" 
            onClick={() => handleClick(index)}>
                <h3 className='text-sm md:text-xl font-semibold text-gray-800'>{item.question}</h3>
                <span>{active == index ? "-" : "+"}</span>
            </div>
            {active == index && <p className='text-black'>{item.awnser}</p>}
        </div>
     ))}

    </div>
  )
}

export default Frecuente