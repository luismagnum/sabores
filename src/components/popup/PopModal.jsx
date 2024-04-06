import React, { useState } from 'react';
import Modal from "./Modal";

const PopModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center" id='Seccion1'>
      <button
        className="bg-black hover:bg-teal-500 text-white font-bold mt-20 mb-2 py-2 px-4 rounded-full"
        onClick={handleOpenModal}
      >
        Promociones
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="p-4">
          <h1 className="text-center text-xl text-black font-bold mb-4">Mini-Combo</h1>
          <p className='text-xl text-black'>4 empanadas, 4 tequeños</p>
          <p className='text-xl text-black'> y 1 salsa de ajo</p>
          <p className='text-center text-xl text-black font-bold'>$7500</p>
          <button
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCloseModal}
          >
            Cerrar 
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PopModal;
