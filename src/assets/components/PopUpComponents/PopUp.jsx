import { IoIosInformationCircleOutline } from "react-icons/io";
const PopUp = ({ onConfirm, onCancel }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white py-8 px-12 rounded-lg shadow-md text-center">
        <div className="text-4xl flex items-center justify-center text-blue-600 mb-4">
          <IoIosInformationCircleOutline />
        </div>
        <p className="text-lg font-semibold mb-6">Apakah Anda yakin ingin logout?</p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md"
            onClick={onConfirm}
          >
            Ya
          </button>
          <button
            className="bg-red-100 text-red-600 px-4 py-2 rounded-md"
            onClick={onCancel}
          >
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
