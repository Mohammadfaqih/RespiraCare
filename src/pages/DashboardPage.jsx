import { FaPlus } from "react-icons/fa6";
import { MedicationData } from "../assets/mockData/data.js/MedicationData";
import { CiFileOn } from "react-icons/ci";
import React, { useState } from "react";
import TambahRiwayat from "../assets/components/PopUpComponents/TambahRiwayat";
import DataPasien from "../assets/components/pasienComponents/DataPasien";
import { IoClose } from "react-icons/io5";

const DashboardPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [view, setView] = useState("dashboard");

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleFormSubmit = (isSuccess) => {
    setIsPopupOpen(false);
    if (isSuccess) {
      setIsSuccessPopupOpen(true); // Tampilkan pop-up Success saat formulir berhasil disubmit
    }
  };

  const handleCloseSuccessPopup = () => {
    setIsSuccessPopupOpen(false); // Tutup pop-up Success
  };

  return (
    <div>
      {view === "dashboard" ? (
        <main className="flex-1 p-8 overflow-auto">
          <div className="flex justify-between items-center mb-8 flex-col md:flex-row">
            <div className="mb-4 md:mb-0">
              <h2 className="text-3xl font-bold text-blue-900">Welcome, Ratna</h2>
              <p className="text-gray-600">We are here to provide you with the best solution for managing your respiratory medication.</p>
            </div>
            <div className="relative">
              <input type="text" placeholder="Search..." className="bg-blue-100 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 md:mr-8 mb-8 md:mb-0">
              <div className="bg-blue-100 p-6 rounded-lg overflow-x-auto shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-blue-900">Medication Monitoring</h3>
                  <button onClick={handleOpenPopup} className="bg-blue-900 text-white rounded-full p-2 hover:bg-blue-700 transition duration-300 cursor-pointer">
                    <FaPlus />
                  </button>
                </div>
                <table className="min-w-full text-left">
                  <thead>
                    <tr className="bg-blue-200">
                      <th className="p-2">Tanggal</th>
                      <th className="p-2">Waktu</th>
                      <th className="p-2">Status Minum</th>
                      <th className="p-2">Bukti</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MedicationData.map((data, i) => (
                      <tr key={i} className="border-b hover:bg-blue-900 hover:text-white cursor-pointer transition-all ease-in-out">
                        <td className="p-2 whitespace-nowrap">{data.tanggal}</td>
                        <td className="p-2 whitespace-nowrap">{data.waktu}</td>
                        <td className="p-2">{data.statusMinum}</td>
                        <td className="p-2 text-blue-600 underline">{data.bukti}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="bg-blue-100 p-6 rounded-lg mb-8 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Status hari ini</h3>
                <p className="text-center text-blue-900 font-bold">Belum minum obat</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Informasi</h3>
                <p className="mb-2"><strong>Tanggal Mulai:</strong> 01/01/2024</p>
                <p className="mb-2"><strong>Tanggal Akhir:</strong> 08/01/2024</p>
                <p className="mb-2"><strong>Penyakit:</strong> FLU, batuk</p>
                <p className="mb-2"><strong>Tingkat Keparahan:</strong> <span className="text-red-600 cursor-pointer">● High</span></p>
              </div>
              <button onClick={() => setView("catatanDokter")} className="bg-customBlue text-white w-full py-4 mt-4 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all ease-out cursor-pointer">
                <CiFileOn className="mr-2" />
                Lihat Catatan Dokter
              </button>
            </div>
          </div>

          {/* Pop-up TambahRiwayat */}
          {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <TambahRiwayat onSubmit={handleFormSubmit} onClose={() => setIsPopupOpen(false)} />
            </div>
          )}

          {/* Pop-up Success */}
          {isSuccessPopupOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-xl font-semibold text-green-600 mb-4 text-center">Success!</h2>
                <p className="text-gray-700 text-center mb-6">Waktu minum obat berhasil ditambahkan.</p>
                <div className="flex justify-center">
                  <button onClick={handleCloseSuccessPopup} className="bg-customBlue text-white py-2 px-4 rounded hover:bg-blue-600">Close</button>
                </div>
              </div>
            </div>
          )}
        </main>
      ) : (
        <DataPasien />
      )}
    </div>
  );
};

export default DashboardPage;
