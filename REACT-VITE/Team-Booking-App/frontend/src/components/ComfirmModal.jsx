import React from 'react';

export default function ConfirmModal({ isOpen, onClose, onConfirm, totalPrice }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/3">
        <h2 className="text-xl font-bold mb-4">Foglalás megerősítése</h2>
        <p className="mb-4">Összeg: {totalPrice} Ft</p>
        <p className="mb-4">Biztos benne, hogy folytatni szeretné a foglalást?</p>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Mégse
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onConfirm}
          >
            Igen
          </button>
        </div>
      </div>
    </div>
  );
}
