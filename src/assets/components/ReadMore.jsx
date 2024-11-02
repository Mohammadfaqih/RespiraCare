import Artikel1 from '../images/Artikel1.png'
import { useNavigate } from 'react-router-dom';


const ReadMore = ({ onNavigate }) => {
  
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center px-4 py-6 md:px-10 lg:px-20">
      {/* Bagian tombol */}
      <div className="flex items-center justify-between w-full mb-6">
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100 transition duration-300"
        >
          Back
        </button>
      </div>

      {/* Judul Artikel */}
      <h1 className="text-2xl font-semibold text-center text-gray-800 md:text-3xl lg:text-4xl mb-4">
        Mengenal Lebih Dekat Penyakit Asma: Gejala, Penyebab, dan Pengobatannya
      </h1>
      <p className="text-center text-gray-600 mb-8">dr. Heru, Sp. P | Kamis, 09 Oktober 2024</p>

      {/* Cover Artikel */}
      <img
        src={Artikel1}
        alt="Cover Article"
        className="w-full max-w-lg h-auto rounded-lg mb-8 shadow-md"
      />

      {/* Isi Artikel */}
      <div className="w-full max-w-3xl text-gray-700 leading-relaxed text-justify">
        <p className="mb-4">
          Asma adalah penyakit kronis yang menyebabkan saluran udara menyempit dan meradang...
        </p>
        <p className="mb-4">
          Menderita asma tidak perlu membuat Anda khawatir. Dengan memahami penyakit ini lebih baik, Anda dapat mengelola asma secara efektif dan menjalani hidup yang berkualitas...
        </p>
        {/* Lanjutkan dengan isi artikel lainnya */}
      </div>
    </div>
  );
};

export default ReadMore;
