import React, { useEffect, useRef } from 'react';
import './TextSlider.css'; // Importar el archivo CSS

const TextSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let clone1 = slider.innerHTML;
    let clone2 = slider.innerHTML;
    slider.innerHTML += clone1 + clone2;
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full bg-[#4f646f]">
      <div
        ref={sliderRef}
        className="flex text-lg animate-marquee"
      >
        <span className="text-white semi-bold mx-4">Nuevo Sabor</span>
        <span className="text-white semi-bold mx-4">Cordon Blue</span>
        <span className="text-white semi-bold mx-4">Nuevo Sabor</span>
        <span className="text-white semi-bold mx-4">Cordon Blue</span>
        {/* Agrega más spans si es necesario */}
      </div>
    </div>
  );
};

export default TextSlider;
