import artikel1 from '../images/Artikel1.png';
import artikel2 from '../images/Artikel2.png';
import artikel3 from '../images/Artikel3.png';
import { useNavigate } from 'react-router-dom';

const articles = [
  {
    title: "Judul Artikel",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    category: "Asma",
    image: artikel1,
  },
  {
    title: "Judul Artikel",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    category: "Olahraga dan Latihan Pernapasan",
    image: artikel2,
  },
  {
    title: "Judul Artikel",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    category: "Olahraga dan Latihan Pernapasan",
    image: artikel3,
  },
  {
    title: "Judul Artikel",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    category: "Asma",
    image: artikel1,
  },
  {
    title: "Judul Artikel",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    category: "Olahraga dan Latihan Pernapasan",
    image: artikel2,
  },
  {
    title: "Judul Artikel",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    category: "Olahraga dan Latihan Pernapasan",
    image: artikel3,
  },
];

const Article = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 lg:p-10 min-h-screen" style={{ background: 'linear-gradient(to bottom, #0a3d62, #ffffff)' }}>
      <header className="flex items-center mb-6">
        <button onClick={() => navigate('/')}
          className="bg-white text-customBlue py-2 px-4 rounded-lg border border-customBlue hover:bg-blue-100">
          Back
        </button>
        <h1 className="text-3xl text-center font-bold ml-4 text-white">Articles</h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <div className="flex gap-3 items-center">
                <button onClick={() => navigate('/Article/judul')}
                  className="text-yellow-500 bg-yellow-100 py-2 px-4 rounded-lg hover:bg-yellow-200">Read more</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
