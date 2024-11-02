import { useState } from "react";
import { MdOutlineFormatListNumbered, MdFormatBold, MdFormatItalic, MdFormatUnderlined } from "react-icons/md";
import { IoListOutline } from "react-icons/io5";
import PopUpSuccess from "../../components/PopUpComponents/PopUpSuccess";

const EditArticle = ({ onNavigate }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  // Fungsi untuk menampilkan popup sukses setelah submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccess(true);
  };

  // Fungsi untuk menutup popup sukses
  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Edit Article</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Input Judul Artikel */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Judul artikel:</label>
          <input
            type="text"
            placeholder="Masukkan judul artikel"
            className="w-full p-2 border border-blue-500 rounded-lg outline-none"
          />
        </div>

        {/* Select Kategori */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Kategori:</label>
          <select className="w-full p-2 border border-blue-500 rounded-lg outline-none">
            <option>Pilih kategori artikel</option>
            <option>Asma</option>
            <option>Olahraga</option>
            <option>Batuk</option>
          </select>
        </div>

        {/* Textarea Konten Artikel */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Konten:</label>
          <div className="border border-blue-500 rounded-lg p-2">
            {/* Toolbar untuk Textarea */}
            <div className="flex space-x-4 mb-2 text-gray-600">
              <button type="button" className="hover:text-gray-900">
                <MdFormatBold />
              </button>
              <button type="button" className="hover:text-gray-900">
                <MdFormatItalic />
              </button>
              <button type="button" className="hover:text-gray-900">
                <MdFormatUnderlined />
              </button>
              <button type="button" className="hover:text-gray-900">
                <IoListOutline />
              </button>
              <button type="button" className="hover:text-gray-900">
                <MdOutlineFormatListNumbered />
              </button>
            </div>
            <textarea
              placeholder="Masukkan teks artikel..."
              rows="10"
              className="w-full p-2 border-none outline-none resize-none"
            ></textarea>
          </div>
        </div>

        {/* Tombol Cancel dan Save */}
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={() => onNavigate('main')}
            type="button"
            className="px-4 py-2 border border-customBlue text-customBlue
            hover:bg-customBlue hover:text-white rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 border border-[#78AAD5] bg-[#D6EBFD] text-customBlue hover:bg-blue-500 hover:text-white rounded-lg"
          >
            Save
          </button>
        </div>
      </form>

      {/* PopUpSuccess */}
      {showSuccess && <PopUpSuccess onClose={handleCloseSuccess} />}
    </div>
  );
};

export default EditArticle;
