// TableEditProfile.jsx
import React, { useState } from "react";
import Pasien from '../../images/Patient-profil.png';
import { MdEdit } from "react-icons/md";

const TableEditProfile = ({ onCancelEdit, onSubmitEdit }) => {
  const [profileData, setProfileData] = useState({
    name: "",
    birthplace: "",
    birthdate: { day: "", month: "", year: "" },
    age: "",
    gender: "",
    address: "",
  });

  // Handle Edit Photo Click
  const handleEditPhotoClick = () => {
    document.getElementById("photoUpload").click();
  };

  // Handle Update Button Click
  const handleUpdateClick = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profileData);
    onSubmitEdit(); // Panggil fungsi onSubmitEdit untuk kembali ke profil dan tampilkan pop-up
  };

  return (
    <div className="pt-7">
      <div className="bg-customBlue p-8 rounded-lg max-w-3xl mx-auto shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        {/* Edit Photo Section */}
        <div className="flex flex-col items-center">
          <img src={Pasien} alt="Profile" className="w-56 h-56 object-cover mb-4" />
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
                className="w-full p-2 rounded bg-gray-500 text-white text-sm"
                value={profileData.name}
                onChange={(e) =>
                  setProfileData({ ...profileData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-white mb-1 text-sm">Tempat lahir</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-500 text-white text-sm"
                value={profileData.birthplace}
                onChange={(e) =>
                  setProfileData({ ...profileData, birthplace: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-white mb-1 text-sm">Tanggal lahir</label>
              <div className="flex space-x-2">
                <select
                  className="w-1/3 p-2 rounded bg-gray-500 text-white text-sm"
                  value={profileData.birthdate.day}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      birthdate: { ...profileData.birthdate, day: e.target.value },
                    })
                  }
                >
                  <option>DD</option>
                  {[...Array(31).keys()].map((day) => (
                    <option key={day} value={day + 1}>
                      {day + 1}
                    </option>
                  ))}
                </select>

                <select
                  className="w-1/3 p-2 rounded bg-gray-500 text-white text-sm"
                  value={profileData.birthdate.month}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      birthdate: {
                        ...profileData.birthdate,
                        month: e.target.value,
                      },
                    })
                  }
                >
                  <option>MM</option>
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => (
                    <option key={i} value={i + 1}>
                      {month}
                    </option>
                  ))}
                </select>

                <select
                  className="w-1/3 p-2 rounded bg-gray-500 text-white text-sm"
                  value={profileData.birthdate.year}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      birthdate: { ...profileData.birthdate, year: e.target.value },
                    })
                  }
                >
                  <option>YYYY</option>
                  {[...Array(101).keys()].map((i) => (
                    <option key={i} value={2024 - i}>
                      {2024 - i}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white mb-1 text-sm">Umur</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-500 text-white text-sm"
                value={profileData.age}
                onChange={(e) =>
                  setProfileData({ ...profileData, age: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-white mb-1 text-sm">Gender</label>
              <select
                className="w-full p-2 rounded bg-gray-500 text-white text-sm"
                value={profileData.gender}
                onChange={(e) =>
                  setProfileData({ ...profileData, gender: e.target.value })
                }
              >
                <option>Pilih Gender</option>
                <option value="male">Laki-Laki</option>
                <option value="female">Perempuan</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-1 text-sm">Alamat</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-500 text-white text-sm"
                value={profileData.address}
                onChange={(e) =>
                  setProfileData({ ...profileData, address: e.target.value })
                }
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onCancelEdit}
                className="px-3 py-1 rounded border border-white text-white hover:bg-white hover:text-blue-900 text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleUpdateClick}
                className="px-3 py-1 rounded bg-[#D6EBFD] text-blue-900 hover:bg-blue-400 text-sm"
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
