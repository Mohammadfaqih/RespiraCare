import React from 'react';

const FormTambahPasien = ({ onClose, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(); // Panggil fungsi onSubmit dari Dashboard untuk menampilkan popup sukses
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Masukkan Data Pasien</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Kolom Kiri */}
        <div className="space-y-4">
          <div>
            <label className="block text-customBlue">Nama</label>
            <input type="text" className="w-full p-2 bg-gray-100 rounded-lg" placeholder="Nama" />
          </div>
          <div>
            <label className="block text-customBlue">Email</label>
            <input type="email" className="w-full p-2 bg-gray-100 rounded-lg" placeholder="Email" />
          </div>
          <div>
            <label className="block text-customBlue">Password</label>
            <div className="relative">
              <input type="password" className="w-full p-2 bg-gray-100 rounded-lg" placeholder="Password" />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer">👁️</span>
            </div>
          </div>
          <div>
            <label className="block text-customBlue">Umur</label>
            <input type="number" className="w-full p-2 bg-gray-100 rounded-lg" placeholder="Umur" />
          </div>
          <div>
            <label className="block text-customBlue">Gender</label>
            <select className="w-full p-2 bg-gray-100 rounded-lg">
              <option>Pilih</option>
              <option>Laki-laki</option>
              <option>Perempuan</option>
            </select>
          </div>
          <div>
            <label className="block text-customBlue">Level</label>
            <select className="w-full p-2 bg-gray-100 rounded-lg">
              <option>Pilih</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-4">
          <div>
            <label className="block text-customBlue">Penyakit</label>
            <input type="text" className="w-full p-2 bg-gray-100 rounded-lg" placeholder="Penyakit" />
          </div>
          <div>
            <label className="block text-customBlue">Nama Obat</label>
            <input type="text" className="w-full p-2 bg-gray-100 rounded-lg" placeholder="Nama obat" />
          </div>
          <div>
            <label className="block text-customBlue">Waktu Minum Obat</label>
            <input type="text" className="w-full p-2 bg-gray-100 rounded-lg" placeholder="Waktu minum obat" />
          </div>
          <div>
            <label className="block text-customBlue">Status</label>
            <select className="w-full p-2 bg-gray-100 rounded-lg">
              <option>Pilih</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div>
            <label className="block text-customBlue">Waktu Minum Obat (/hari)</label>
            <select className="w-full p-2 bg-gray-100 rounded-lg">
              <option>Pilih</option>
              <option>Satu kali</option>
              <option>Dua kali</option>
              <option>Tiga kali</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-customBlue">Tanggal Mulai</label>
              <input type="date" className="w-full p-2 bg-gray-100 rounded-lg" />
            </div>
            <div>
              <label className="block text-customBlue">Tanggal Selesai</label>
              <input type="date" className="w-full p-2 bg-gray-100 rounded-lg" />
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2 flex justify-end gap-4 mt-6">
          <button type="button" onClick={onClose} className="border border-customBlue text-customBlue
          hover:bg-customBlue hover:text-white px-4 py-2 rounded-lg">
            Cancel
          </button>
          <button type="submit" className="bg-[#D6EBFD] hover:bg-blue-500 text-customBlue px-4 py-2 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTambahPasien;
