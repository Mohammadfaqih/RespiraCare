import { useNavigate } from 'react-router-dom';

const ArticleCard = ({ image, title, description }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl">
      <div>
        {/* Gambar Artikel */}
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />

        {/* Deskripsi Artikel */}
        <h3 className="text-lg lg:text-xl font-bold text-customBlue mb-2">{title}</h3>
        <p className="text-sm lg:text-base text-gray-700 font-medium">{description}</p>
      </div>

      {/* Tombol Read More */}
      <div onClick={() => navigate('/Article/judul')} className="mt-6">
        <button className="text-white bg-yellow-400 px-4 py-2 rounded-lg transition duration-300 hover:bg-yellow-500">
          Read more
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
