import React, { useState } from 'react';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

const PopModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center" id="Seccion1">
      <button
        className="bg-teal-500 hover:bg-teal-800 text-white font-bold mt-20 mb-2 py-2 px-4 rounded-full flex items-center gap-2"
        onClick={handleOpenModal}
      >
        <FontAwesomeIcon icon={faFire} /> Nuevo Sabor <FontAwesomeIcon icon={faFire} />
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="p-4">
          <h1 className="text-center text-xl text-black font-bold mb-4">Empanada</h1>
          <p className="text-xl text-black">Cordon blue</p>
          <p className="text-xl text-black">Pollo, queso y jamón</p>
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

