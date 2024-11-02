// PopUpSuccess.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PopUPEdit = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <FaCheckCircle className="text-green-500 text-4xl" />
        <p className="text-green-500 font-bold text-lg">Edit profile berhasil</p>
        <button
          onClick={onClose}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PopUPEdit;
