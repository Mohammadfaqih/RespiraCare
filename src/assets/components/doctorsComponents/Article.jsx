import artikel1 from '../../images/Artikel1.png'
import artikel2 from '../../images/Artikel2.png'
import artikel3 from '../../images/Artikel3.png'
import { GoPlus } from "react-icons/go";

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

const Article = ({ onNavigate }) => {
  return (
    <div className="p-6 lg:p-10">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Articles</h1>
        <div className="flex gap-4">
          <button onClick={() => onNavigate('tambah')}
            className="bg-customBlue text-white py-2 px-4 rounded-lg flex items-center gap-2">
            <GoPlus /> Tambah</button>
          <button onClick={() => onNavigate('histori')}
            className="bg-customBlue text-white py-2 px-4 rounded-lg">Histori</button>
        </div>
      </header>

      <div className="flex gap-4 mb-6">
        {["Terbaru", "Populer", "Asma", "Olahraga dan Latihan Pernapasan"].map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-blue-100 text-customBlue rounded-lg hover:bg-blue-200"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <div className="flex gap-3 items-center">
                <button onClick={() => onNavigate('read')}
                  className="text-yellow-500 bg-yellow-100 py-2 px-4 rounded-lg">Read more</button>
                <button onClick={() => onNavigate('edit')}
                  className="text-blue-600 bg-blue-100 py-2 px-4 rounded-lg">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
