import aboutImage from '../images/dokter 1.png';
import feature1Image from '../images/feature1.png';
import feature2Image from '../images/feature2.png';
import feature3Image from '../images/feature3.png';

const AboutFeature = () => {
  return (
    <div id="about" className="feature-cards min-h-screen w-full">

      <div className="about--section bg-gradient-to-b from-white via-customBlue to-customBlue min-h-screen py-5 w-full">
        <div className="container mx-auto px-6 lg:px-16">

          {/* About Section */}
          <div className="text-center mb-10">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#113F67]">About</h1>
            <div className="w-16 h-1 mt-2 mx-auto bg-[#78AAD5C4]"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center">
              <img className="w-full max-w-xs md:max-w-md rounded-xl shadow-md p-4 bg-white" src={aboutImage} alt="About" />
            </div>
            <p className="text-lg md:text-xl text-white font-semibold text-justify">
              RespiraCare adalah aplikasi inovatif yang membantu pasien dengan gangguan pernapasan mengelola kesehatan 
              mereka secara efektif. Menggunakan teknologi terkini, kami menyediakan solusi mudah digunakan dengan fitur pemantauan 
              real-time, wawasan kesehatan personal, dan komunikasi langsung dengan penyedia layanan kesehatan. Dengan pendekatan 
              berpusat pada pasien, tim kami berkomitmen untuk terus menyempurnakan aplikasi ini guna meningkatkan kualitas hidup pengguna, 
              membuat perawatan pernapasan lebih mudah diakses dan dikelola.
            </p>
          </div>
        </div>
      </div>


      <section id="feature" className="pt-16 bg-gradient-to-b from-customBlue via-customBlue to-white">
        <div className="text-center pb-16">
          <h1 className="text-2xl lg:text-4xl font-bold text-white">Features</h1>
          <p className="text-base md:text-lg lg:w-2/3 mx-auto mt-4 text-white">
            Aplikasi ini membantu mengontrol pernapasan dan memantau kepatuhan minum obat pasien menggunakan kecerdasan buatan.
          </p>
        </div>

        {/* Feature Cards */}
        {[{ title: 'Dashboard Dokter', image: feature1Image, text: 'Fitur ini dapat digunakan oleh dokter untuk membuat akun pasien, melihat data pasien, mengedit data paseien, menghapus data pasien, serta dapat melihat apakah pasien patuh atau tidak dalam meminum obat sesuai anjuran dokter.' },
        { title: 'Dashboard Pasien', image: feature2Image, text: 'Fitur ini dapat digunakan oleh pasien untuk melakukan control minum obat, dengan cara input data apakah telah minum obat atau belum, supaya dokter bisa tau apakah pasien tersebut patuh minum obat atau tidak.' },
        { title: 'AI Kepatuhan', image: feature3Image, text: 'Fitur yang digunakan untuk mengecek pasien patuh atau tidak dalam informasi pasien yang diterima dokter menggunakan teknologi AI (Kecerdasan Buatan).' }
        ].map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center mb-8 lg:w-2/3 mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col lg:flex-row items-center gap-6">
              <img src={feature.image} alt={feature.title} className="lg:w-1/2 w-full rounded-lg" />
              <div className="text-left lg:w-1/2">
                <h2 className="text-xl lg:text-2xl font-bold text-[#113F67]">{feature.title}</h2>
                <p className="text-base lg:text-lg mt-2 text-[#113F67]">{feature.text}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutFeature;
