
import { FaCheckCircle } from "react-icons/fa";

const PopUpSuccess = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white px-20 py-10 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <FaCheckCircle className="text-green-500 text-6xl" />
        <p className="text-green-500 font-bold text-lg">Berhasil</p>
        <button
          onClick={onClose}
          className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center justify-center"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PopUpSuccess;
