// TableProfile.jsx
import React from "react";
import Foto from '../../images/Patient-profil.png';
import { MdEdit } from "react-icons/md";

const TableProfile = ({ onEditClick }) => {
  return (
    <div className="bg-customBlue text-white py-8 px-6 rounded-lg flex flex-col md:flex-row max-w-4xl mx-auto mt-10">
      <img src={Foto} alt="Profile" className="rounded-lg mb-6 md:mb-0 md:mr-6 w-32 h-32 md:w-40 md:h-40 object-cover" />
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">My Profile</h2>
        <div className="mb-3 flex justify-between">
          <span className="font-semibold">Name</span>
          <span className="ml-4">Ratna Joe</span>
        </div>
        <div className="mb-3 flex justify-between">
          <span className="font-semibold">Tempat, tanggal lahir</span>
          <span className="ml-4">Medan, 14/02/2002</span>
        </div>
        <div className="mb-3 flex justify-between">
          <span className="font-semibold">Umur</span>
          <span className="ml-4">22 tahun</span>
        </div>
        <div className="mb-3 flex justify-between">
          <span className="font-semibold">Gender</span>
          <span className="ml-4">Perempuan</span>
        </div>
        <div className="mb-3 flex justify-between">
          <span className="font-semibold">Alamat</span>
          <span className="ml-4">Medan, Sumatera Utara</span>
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <button onClick={onEditClick} className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded">
          <MdEdit /> Edit
        </button>
      </div>
    </div>
  );
};

export default TableProfile;
