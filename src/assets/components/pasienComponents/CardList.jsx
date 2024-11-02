import React, { useState } from 'react';
import Image from '../../images/doker-image.png';
import DoctorProfile from './DoctorProfile';

const CardList = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorDetailsClick = (doctor) => {
    setSelectedDoctor(doctor); // Mengatur dokter yang dipilih
  };

  if (selectedDoctor) {
    return <DoctorProfile doctor={selectedDoctor} />;
  }

  return (
    <main className="flex-1 p-4 md:p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">List Doctors</h1>
        <input 
          type="text" 
          placeholder="Search..." 
          className="p-2 rounded-full bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Doctor Card 1 */}
        <div className="bg-blue-100 p-4 rounded-lg flex items-center space-x-4 shadow-lg">
          <img src={Image} alt="Doctor Aaaaa" className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg" />
          <div>
            <h2 className="text-lg md:text-xl font-bold">dr. Aaaaa, Sp. P</h2>
            <p className="text-gray-700">Spesialis: Paru</p>
            <button 
              className="mt-2 px-4 py-2 bg-yellow-400 text-customBlue rounded-lg hover:bg-yellow-500 transition duration-300"
              onClick={() => handleDoctorDetailsClick({
                name: 'dr. Aaaaa, Sp. P',
                speciality: 'Spesialis Paru',
                experience: '10 tahun',
                education: ['Universitas Indonesia (2010)', 'Universitas Airlangga (2015)']
              })}
            >
              Doctor Details
            </button>
          </div>
        </div>

        {/* Doctor Card 2 */}
        <div className="bg-blue-100 p-4 rounded-lg flex items-center space-x-4 shadow-lg">
          <img src={Image} alt="Doctor Bbbb" className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg" />
          <div>
            <h2 className="text-lg md:text-xl font-bold">dr. Bbbb, Sp. P</h2>
            <p className="text-gray-700">Spesialis: Paru</p>
            <button 
              className="mt-2 px-4 py-2 bg-yellow-400 text-customBlue rounded-lg hover:bg-yellow-500 transition duration-300"
              onClick={() => handleDoctorDetailsClick({
                name: 'dr. Bbbb, Sp. P',
                speciality: 'Spesialis Paru',
                experience: '12 tahun',
                education: ['Universitas Indonesia (2012)', 'Universitas Airlangga (2017)']
              })}
            >
              Doctor Details
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardList;
