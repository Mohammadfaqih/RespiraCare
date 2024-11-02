import React from 'react';
import { riwayatMinum } from '../../mockData/data.js/riwayatMinum';
import { IoIosInformationCircleOutline } from "react-icons/io";

const InformasiPasien = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">

      {/* Informasi Pasien */}
      <div className="border border-customBlue rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p><strong>Name:</strong> Ratna Joe</p>
          <p><strong>Medicine Name:</strong> Paracetamol</p>
          <p><strong>Age:</strong> 22 tahun</p>
          <p><strong>Gender:</strong> Perempuan</p>
        </div>
        <div>
          <p><strong>Disease:</strong> FLU Batuk</p>
          <p><strong>Time to take medicine:</strong> 7</p>
          <p><strong>Time to take medication (/day):</strong> 3</p>
          <p><strong>Status:</strong> Active</p>
        </div>
      </div>

      {/* Jangka Waktu Minum Obat */}
      <p className="text-gray-700 flex items-center space-x-2">
        <span><IoIosInformationCircleOutline /></span>
        <span>Jangka waktu pasien minum obat: <strong>2024-06-14 hingga 2024-06-21</strong></span>
      </p>

      {/* Tabel Riwayat Minum Obat */}
      <div className="bg-[#D6EBFD] p-4 rounded-lg overflow-auto">
        <h3 className="text-lg font-semibold mb-4 text-blue-900">Informasi Pasien</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-customBlue text-white">
              <th className="p-2 border">Hari</th>
              <th className="p-2 border">Tanggal</th>
              <th className="p-2 border">Waktu</th>
              <th className="p-2 border">Status minum</th>
              <th className="p-2 border">Bukti</th>
            </tr>
          </thead>
          <tbody>
            {riwayatMinum.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-blue-100'}>
                <td className="p-2 border">{item.hari}</td>
                <td className="p-2 border">{item.tanggal}</td>
                <td className="p-2 border">{item.waktu}</td>
                <td className="p-2 border">{item.status}</td>
                <td className="p-2 border text-blue-600 cursor-pointer">{item.bukti}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tombol Download Excel */}
      <div className="flex justify-center">
        <button className="bg-customBlue shadow-md text-white px-4 py-2 rounded-lg">Download Excel</button>
      </div>

      {/* Form Upload Data Kepatuhan */}
      <div className="border border-blue-500 rounded-lg p-4">
        <h3 className="text-xl font-bold text-customBlue mb-4">Upload Data Kepatuhan</h3>
        <div className="flex items-center space-x-4">
          <input type="file" className="w-full border border-gray-400 p-2 rounded-lg" />
          <button className="bg-[#D6EBFD] border border-[#78AAD5] hover:bg-blue-500 text-customBlue px-4 py-2 rounded-lg">Upload</button>
        </div>
      </div>
    </div>
  );
};

export default InformasiPasien;
