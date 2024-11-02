// TableEditProfile.jsx
import React, { useState } from "react";
import Pasien from '../../images/Doctor-profil.png';
import { MdEdit } from "react-icons/md";

const TableEditProfile = ({ onCancelEdit, onSubmitEdit }) => {
  const [profileData, setProfileData] = useState({
    name: "",
    specialty: "",
    experience: "",
    education: [
      { university: "", year: "" },
      { university: "", year: "" }
    ],
  });

  const years = ["2020", "2021", "2022", "2023", "2024"];

  // Handle Edit Photo Click
  const handleEditPhotoClick = () => {
    document.getElementById("photoUpload").click();
  };

  // Handle Update Button Click
  const handleUpdateClick = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profileData);
    onSubmitEdit();
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...profileData.education];
    updatedEducation[index][field] = value;
    setProfileData({ ...profileData, education: updatedEducation });
  };

  return (
    <div className="pt-7">
      <div className="bg-customBlue p-8 rounded-lg max-w-3xl mx-auto shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Edit Photo Section */}
        <div className="flex flex-col items-center">
          <img src={Pasien} alt="Profile" className="w-40 h-40 rounded-md object-cover mb-4" />
          <button onClick={handleEditPhotoClick} className="text-white hover:underline inline-flex items-center gap-2 text-sm">
            Edit foto <MdEdit />
          </button>
          <input type="file" id="photoUpload" accept="image/jpeg" className="hidden" />
        </div>

        {/* Edit Profile Section */}
        <div>
          <h2 className="text-white text-xl mb-4 font-semibold">Edit Profile</h2>
          <form className="space-y-3">
            <div>
              <label className="block text-white mb-1 text-sm">Nama</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-gray-500 text-white text-sm"
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-white mb-1 text-sm">Bidang keahlian</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-gray-500 text-white text-sm"
                value={profileData.specialty}
                onChange={(e) => setProfileData({ ...profileData, specialty: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-white mb-1 text-sm">Pengalaman kerja (tahun)</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-gray-500 text-white text-sm"
                value={profileData.experience}
                onChange={(e) => setProfileData({ ...profileData, experience: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-white mb-1 text-sm">Riwayat pendidikan</label>
              {[0, 1].map((index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Universitas"
                    className="w-full p-3 rounded bg-gray-500 text-white text-sm"
                    value={profileData.education[index].university}
                    onChange={(e) => handleEducationChange(index, "university", e.target.value)}
                  />
                  <select
                    className="w-1/3 p-3 rounded bg-gray-500 text-white text-sm"
                    value={profileData.education[index].year}
                    onChange={(e) => handleEducationChange(index, "year", e.target.value)}
                  >
                    <option value="">Tahun</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <div className="flex justify-end space-x-3 mt-4">
              <button
                type="button"
                onClick={onCancelEdit}
                className="px-4 py-2 rounded border border-white text-white hover:bg-white hover:text-blue-900 text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleUpdateClick}
                className="px-4 py-2 rounded bg-[#D6EBFD] text-blue-900 hover:bg-blue-400 text-sm"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TableEditProfile;
