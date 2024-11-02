// TableProfile.jsx
import React from "react";
import Foto from '../../images/Doctor-profil.png';
import { MdEdit } from "react-icons/md";

const TableProfile = ({ onEditClick }) => {
  return (
    <div className="bg-customBlue text-white py-8 px-6 rounded-lg max-w-4xl mx-auto mt-10 shadow-lg">
      {/* Wrapper for Profile Picture and Information */}
      <div className="flex flex-col items-center md:flex-row md:items-start">
        {/* Profile Picture */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
          <img src={Foto} alt="Doctor Profile" className="rounded-lg w-32 h-32 md:w-40 md:h-40 object-cover" />
        </div>

        {/* Profile Details */}
        <div className="flex-1 w-full">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">My Profile</h2>

          {/* Profile Info Grid */}
          <div className="grid gap-y-3">
            <div className="flex justify-between items-start md:items-center">
              <span className="font-semibold">Name</span>
              <span className="ml-4 text-right md:text-left">dr. Heru, Sp. P</span>
            </div>
            <div className="flex justify-between items-start md:items-center">
              <span className="font-semibold">Specialization</span>
              <span className="ml-4 text-right md:text-left">Pulmonologist</span>
            </div>
            <div className="flex justify-between items-start md:items-center">
              <span className="font-semibold">Experience</span>
              <span className="ml-4 text-right md:text-left">15 years</span>
            </div>
            <div className="flex justify-between items-start md:items-center">
              <span className="font-semibold">Education</span>
              <span className="ml-4 text-right md:text-left">
                Universitas Indonesia (2010)<br />
                Universitas Airlangga (2015)
              </span>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-4 md:mt-0 md:ml-6">
          <button 
            onClick={onEditClick} 
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded"
          >
            <MdEdit /> Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableProfile;
