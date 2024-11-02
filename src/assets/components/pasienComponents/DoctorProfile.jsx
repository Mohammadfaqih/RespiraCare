import React from "react";
import DoctorImage from '../../images/Doctor-profil.png';

const DoctorProfile = () => {
  return (
    <div className="bg-customBlue text-white py-6 px-4 md:px-8 rounded-lg flex flex-col md:flex-row max-w-4xl mx-auto mt-10 shadow-lg">
      {/* Image Section */}
      <img
        src={DoctorImage}
        alt="Doctor Profile"
        className="rounded-lg mb-6 md:mb-0 md:mr-8 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover mx-auto md:mx-0"
      />

      {/* Info Section */}
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center md:text-left">Doctor Details</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-4">
          {/* Name */}
          <div className="font-semibold">Name</div>
          <div>dr. Heru, Sp. P</div>

          {/* Bidang Keahlian */}
          <div className="font-semibold">Bidang Keahlian</div>
          <div>Spesialis Paru</div>

          {/* Pengalaman Kerja */}
          <div className="font-semibold">Pengalaman Kerja</div>
          <div>15 tahun</div>

          {/* Riwayat Pendidikan */}
          <div className="font-semibold">Riwayat Pendidikan</div>
          <div>
            Universitas Indonesia (2010)
            <br />
            Universitas Airlangga (2015)
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
