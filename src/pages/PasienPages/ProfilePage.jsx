// ProfilePage.jsx
import { useState } from "react";
import TableProfile from "../../assets/components/pasienComponents/TableProfile";
import TableEditProfile from "../../assets/components/pasienComponents/TableEditProfile";
import PopUpSuccess from "../../assets/components/PopUpComponents/PopUpEdit";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Fungsi untuk berpindah ke mode edit
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Fungsi untuk membatalkan edit
  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  // Fungsi untuk submit edit dan kembali ke halaman profil
  const handleSubmitEdit = () => {
    setIsEditing(false);
    setShowSuccessPopup(true); // Tampilkan pop-up sukses
  };

  return (
    <div>
      {/* Tampilkan komponen sesuai mode editing */}
      {isEditing ? (
        <TableEditProfile onCancelEdit={handleCancelEdit} onSubmitEdit={handleSubmitEdit} />
      ) : (
        <TableProfile onEditClick={handleEditClick} />
      )}

      {/* Pop-up pesan sukses */}
      {showSuccessPopup && <PopUpSuccess onClose={() => setShowSuccessPopup(false)} />}
    </div>
  );
};

export default ProfilePage;
