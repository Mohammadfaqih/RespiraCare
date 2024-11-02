import { useState } from "react";
import { FaRegImage } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const TambahRiwayat = ({ onSubmit, onClose }) => {
  const [tanggal, setTanggal] = useState("");
  const [waktu, setWaktu] = useState("");
  const [statusMinum, setStatusMinum] = useState("");
  const [bukti, setBukti] = useState(null);
  const [hari, setHari] = useState("");

  const handleFileChange = (e) => {
    setBukti(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(true);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Tambah Waktu Minum</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <IoClose size={20} />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="hari" className="block text-gray-700 font-medium mb-2">Hari</label>
          <select
            id="hari"
            value={hari}
            onChange={(e) => setHari(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Pilih Hari</option>
            <option value="Senin">Senin</option>
            <option value="Selasa">Selasa</option>
            <option value="Rabu">Rabu</option>
            <option value="Kamis">Kamis</option>
            <option value="Jumat">Jumat</option>
            <option value="Sabtu">Sabtu</option>
            <option value="Minggu">Minggu</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="tanggal" className="block text-gray-700 font-medium mb-2">Tanggal</label>
          <input
            type="date"
            id="tanggal"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="waktu" className="block text-gray-700 font-medium mb-2">Waktu</label>
          <input
            type="time"
            id="waktu"
            value={waktu}
            onChange={(e) => setWaktu(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="statusMinum" className="block text-gray-700 font-medium mb-2">Status Minum</label>
          <select
            id="statusMinum"
            value={statusMinum}
            onChange={(e) => setStatusMinum(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Pilih status minum</option>
            <option value="Sudah">Sudah</option>
            <option value="Belum">Belum</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="bukti" className="block text-gray-700 font-medium mb-2">Bukti</label>
          <div className="flex items-center border border-gray-300 rounded p-2 bg-blue-50 cursor-pointer hover:bg-blue-100">
            <label htmlFor="bukti" className="flex items-center space-x-2 cursor-pointer">
              <FaRegImage className="text-gray-600" />
              <span className="text-gray-600">{bukti ? bukti.name : "Pilih gambar"}</span>
              <input type="file" id="bukti" onChange={handleFileChange} className="hidden" />
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-customBlue text-white py-2 px-6 rounded hover:bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TambahRiwayat;
