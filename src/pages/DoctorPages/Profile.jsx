import { useState } from "react";
import TableProfile from "../../assets/components/doctorsComponents/TableProfile";
import EditDoctorProfile from "../../assets/components/doctorsComponents/EditDoctorProfile";
import PopUpSuccess from "../../assets/components/PopUpComponents/PopUpSuccess";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSubmitEdit = () => {
    setIsEditing(false);
    setShowSuccessPopup(true);
  };

  return (
    <div>
      {isEditing ? (
        <EditDoctorProfile onCancelEdit={handleCancelEdit} onSubmitEdit={handleSubmitEdit} />
      ) : (
        <TableProfile onEditClick={handleEditClick} />
      )}

      {showSuccessPopup && <PopUpSuccess onClose={() => setShowSuccessPopup(false)} />}
    </div>
  );
};

export default Profile;
