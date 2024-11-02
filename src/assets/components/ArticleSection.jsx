import React from 'react';
import ArticleCard from './ArticleCard';
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'Judul Artikel 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: '/src/assets/images/Artikel1.png',
  },
  {
    id: 2,
    title: 'Judul Artikel 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: '/src/assets/images/Artikel2.png',
  },
  {
    id: 3,
    title: 'Judul Artikel 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: '/src/assets/images/Artikel3.png',
  },
];

const categories = ['Terbaru', 'Populer', 'Asma', 'Olahraga dan Latihan Pernapasan'];

const ArticleSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-b from-customBlue to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-10">Articles</h2>

        {/* Kategori tombol */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className="bg-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:bg-[#D6EBFD] transition duration-300 md:text-base"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Daftar artikel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              image={article.image}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>

        {/* Tombol baca artikel lainnya */}
        <div className="mt-10 flex justify-center">
          <button onClick={() => navigate('/Article')}
            className="flex items-center justify-center gap-2 bg-white py-4 px-6 rounded-xl shadow-lg 
          transition duration-300 hover:bg-gray-200 hover:text-customBlue group w-[100%]">
            Baca artikel lainnya
            <BsArrowUpRightCircle className="transition-transform duration-300 transform group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
