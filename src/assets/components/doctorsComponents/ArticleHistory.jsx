import React from "react";

const articlesHistory = [
  { title: "Judul artikel 1", category: "Asma", date: "09/10/2024", time: "08:14", author: "dr. Heru, Sp. P", status: "Uploaded" },
  { title: "Judul artikel 2", category: "Asma", date: "09/10/2024", time: "09:14", author: "dr. Heru, Sp. P", status: "Draft" },
  { title: "Judul artikel 3", category: "Asma", date: "09/10/2024", time: "10:10", author: "dr. Heru, Sp. P", status: "Uploaded" },
  { title: "Judul artikel 4", category: "Olahraga", date: "09/10/2024", time: "09:14", author: "dr. Heru, Sp. P", status: "Draft" },
  { title: "Judul artikel 5", category: "Olahraga", date: "09/10/2024", time: "09:14", author: "dr. Heru, Sp. P", status: "Draft" },

  // Tambahkan data lainnya sesuai kebutuhan
];

const ArticleHistory = ({ onNavigate }) => {
  return (
    <div className="p-6 lg:p-10">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Histori Data Artikel</h1>
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border bg-[#D6EBFD] border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </header>

      <div className="overflow-auto">
        <table className="w-full bg-blue-50 rounded-xl shadow-lg">
          <thead>
            <th className="py-6 px-4 text-left">Data Artikel</th>
            <tr className="bg-customBlue text-white">
              <th className="px-4 py-2 text-left">Judul</th>
              <th className="px-4 py-2 text-left">Kategori</th>
              <th className="px-4 py-2 text-left">Tanggal</th>
              <th className="px-4 py-2 text-left">Waktu</th>
              <th className="px-4 py-2 text-left">Penulis</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {articlesHistory.map((article, index) => (
              <tr key={index} className={`${index % 2 === 0 ? "bg-blue-100" : "bg-blue-50"}`}>
                <td className="px-4 py-2">{article.title}</td>
                <td className="px-4 py-2">{article.category}</td>
                <td className="px-4 py-2">{article.date}</td>
                <td className="px-4 py-2">{article.time}</td>
                <td className="px-4 py-2">{article.author}</td>
                <td className="px-4 py-2">{article.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-6">
        <button onClick={() => onNavigate('main')}
         className="hover:bg-blue-600 hover:text-white text-customBlue border border-customBlue
         py-2 px-6 rounded-lg">Back</button>
      </div>
    </div>
  );
};

export default ArticleHistory;
