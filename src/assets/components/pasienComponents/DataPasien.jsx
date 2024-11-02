import { FaDownload } from "react-icons/fa";

const DataPasien = () => {
  return (
    <main className="w-full min-h-screen p-4 md:p-8">
      {/* Title Section */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">Data Pasien</h1>
        <p className="text-sm md:text-base text-gray-700">
          Jangka waktu minum obat: <span className="font-semibold">2024–06–14</span> hingga <span className="font-semibold">2024–06–21</span>
        </p>
      </div>

      {/* Patient Form */}
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg border border-blue-300">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 md:gap-x-8">
          {/* Daftar kategori dan jawaban */}
          {[
            { label: "Name", value: "Ratna Joe" },
            { label: "Medicine Name", value: "Paracetamol" },
            { label: "Age", value: "22 tahun" },
            { label: "Gender", value: "Perempuan" },
            { label: "Disease", value: "FLU Batuk" },
            { label: "Time to take medicine", value: "7" },
            { label: "Time to take medication (/day)", value: "3" },
            { label: "Status", value: "Active" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col space-y-1">
              {/* Label (kategori) */}
              <label className="text-sm md:text-base font-semibold text-gray-700">
                {item.label}
              </label>
              {/* Jawaban */}
              <input
                type="text"
                value={item.value}
                className={`border rounded-lg p-2 text-gray-700 ${
                  item.value === "Active"
                    ? "border-green-500 bg-green-100 text-green-700 font-semibold text-center"
                    : "border-blue-300"
                }`}
                disabled
              />
            </div>
          ))}
        </form>

        {/* Download Button */}
        <div className="flex justify-center mt-6">
          <button className="flex items-center bg-blue-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-900 transition duration-200 gap-2">
            <FaDownload />
            Unduh Catatan Dokter
          </button>
        </div>
      </div>
    </main>
  );
};

export default DataPasien;
