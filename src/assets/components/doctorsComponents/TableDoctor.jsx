import { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import patientsData from '../../mockData/data.js/DataPasien';
import PopUpConfirmDelete from "../../components/PopUpComponents/PopUpConfirmDelete";
import PopUpSuccess from "../../components/PopUpComponents/PopUpSuccess";

const TableDoctor = ({ onAddPatientClick, onInfoClick, onEditClick }) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDeleteClick = () => setShowConfirmDelete(true);
  const handleConfirmDelete = () => {
    setShowConfirmDelete(false);
    setShowSuccess(true);
  };
  const handleCancelDelete = () => setShowConfirmDelete(false);
  const handleCloseSuccess = () => setShowSuccess(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-screen-lg mx-auto">
      <div className="flex flex-col items-center lg:items-start">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-6 sm:mb-10">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">Welcome Doctor, Heru</h1>
            <p className="text-gray-600 text-sm sm:text-base">Track complete patient medical history for better decision-making.</p>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="mt-4 sm:mt-0 bg-blue-100 p-2 rounded-lg w-full sm:w-48"
          />
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8 w-full lg:w-auto">
          <div className="bg-customBlue text-white p-4 rounded-lg text-center">
            <p>Total patients: 34</p>
          </div>
          <div className="bg-customBlue text-white p-4 rounded-lg text-center">
            <p>Active patients: 21</p>
          </div>
          <div className="bg-red-600 text-white p-4 rounded-lg text-center">
            <p>High: 5</p>
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg text-center">
            <p>Medium: 5</p>
          </div>
          <div className="bg-green-600 text-white p-4 rounded-lg text-center">
            <p>Low: 11</p>
          </div>
        </div>

        {/* Patient List Table */}
        <div className="bg-blue-100 p-4 rounded-xl w-full overflow-x-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-blue-900">Patient List</h2>
            <button
              onClick={onAddPatientClick}
              className="bg-customBlue text-white p-2 rounded-full shadow-md"
            >
              <FaPlus />
            </button>
          </div>
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-customBlue text-white w-full">
                <th className="p-2 sm:p-4">Nama</th>
                <th className="p-2 sm:p-4">Penyakit</th>
                <th className="p-2 sm:p-4">Umur</th>
                <th className="p-2 sm:p-4">Gender</th>
                <th className="p-2 sm:p-4">Informasi</th>
                <th className="p-2 sm:p-4">Status</th>
                <th className="p-2 sm:p-4">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {patientsData.map((patient, index) => (
                <tr
                  className={index % 2 === 0 ? 'bg-blue-50' : 'bg-blue-100'}
                  key={patient.id}
                >
                  <td className="p-2 sm:p-4">{patient.name}</td>
                  <td className="p-2 sm:p-4">{patient.disease}</td>
                  <td className="p-2 sm:p-4">{patient.age}</td>
                  <td className="p-2 sm:p-4">{patient.gender}</td>
                  <td className="p-2 sm:p-4 flex justify-center">
                    <button onClick={onInfoClick} className="text-white p-1 rounded-full bg-customBlue">
                      <IoIosInformationCircleOutline />
                    </button>
                  </td>
                  <td className="p-2 sm:p-4">
                    <span className="bg-green-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md">
                      {patient.status}
                    </span>
                  </td>
                  <td className="p-2 sm:p-4 flex space-x-2">
                    <button onClick={onEditClick} className="text-white p-1 rounded-full bg-customBlue">
                      <MdEdit />
                    </button>
                    <button onClick={handleDeleteClick} className="text-white p-1 rounded-full bg-red-600">
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Pop-up */}
      {showConfirmDelete && (
        <PopUpConfirmDelete
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}

      {/* Success Pop-up */}
      {showSuccess && (
        <PopUpSuccess onClose={handleCloseSuccess} />
      )}
    </div>
  );
};

export default TableDoctor;
