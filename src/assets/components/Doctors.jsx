import doctors from "./dokterList";

const Doctors = () => {
  return (
    <section id='doctor' className='doktor-section flex flex-col justify-between pt-20'>
      <div className="bg-gradient-to-b from-white to-customBlue py-12">
        <div className="container mx-auto px-4">
          <div className="relative w-fit mx-auto mb-12 text-center">
            <h1 className="text-customBlue lg:text-4xl text-2xl font-bold relative z-10">
              Doctors
            </h1>
            <span className="absolute left-0 bottom-0 w-full h-2 bg-[#78AAD5C4] mt-2"></span>
          </div>

          {/* Grid Doctors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white border-2 border-customBlue rounded-3xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold text-customBlue mb-1">{doctor.name}</h3>
                <p className="text-sm text-gray-600 mb-2">Bidang keahlian: {doctor.specialty}</p>
                <p className="text-sm text-gray-600 mb-4">Pengalaman kerja: {doctor.experience}</p>
                <div className="text-sm text-gray-700">
                  <h4 className="font-semibold mb-2">Riwayat pendidikan:</h4>
                  <ul className="list-none space-y-1">
                    {doctor.education.map((edu, i) => (
                      <li key={i} className="text-xs lg:text-sm">{edu}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
