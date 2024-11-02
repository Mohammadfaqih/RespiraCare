
import { FaTrashAlt } from "react-icons/fa";

const PopUpConfirmDelete = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <FaTrashAlt className="text-blue-600 text-4xl" />
        <p className="text-gray-700 font-semibold text-lg">Hapus data pasien ini?</p>
        <div className="flex space-x-4">
          <button
            onClick={onConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Ya
          </button>
          <button
            onClick={onCancel}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpConfirmDelete;
