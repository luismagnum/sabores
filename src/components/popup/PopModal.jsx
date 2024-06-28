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
        className="bg-yellow-500 hover:bg-teal-500 text-white font-bold mt-20 mb-2 py-2 px-4 rounded-full"
        onClick={handleOpenModal}
      >
        🔥Nuevo Sabor🔥
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="p-4">
          <h1 className="text-center text-xl text-black font-bold mb-4">Empanada</h1>
          <p className='text-xl text-black'>Cordon blue</p>
          <p className='text-xl text-black'>Pollo,queso,jamon</p>
          <p className='text-center text-xl text-black font-bold'> Y queso azul</p>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
