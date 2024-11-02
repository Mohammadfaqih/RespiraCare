import { useState } from "react";
import FormTambahPasien from "../../assets/components/doctorsComponents/FormTambahPasien";
import TableDoctor from "../../assets/components/doctorsComponents/TableDoctor";
import InformasiPasien from "../../assets/components/doctorsComponents/InformasiPasien";
import FormEditPasien from "../../assets/components/doctorsComponents/FormEditPasien";
import PopUpSuccess from "../../assets/components/PopUpComponents/PopUpSuccess";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("TableDoctor");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleShowFormTambahPasien = () => {
    setActiveComponent("FormTambahPasien");
  };

  const handleShowInformasiPasien = () => {
    setActiveComponent("InformasiPasien");
  };

  const handleShowFormEditPasien = () => {
    setActiveComponent("FormEditPasien");
  };

  const handleClose = () => {
    setActiveComponent("TableDoctor");
  };

  // Fungsi untuk menampilkan popup sukses setelah submit
  const handleFormSubmit = () => {
    setShowSuccess(true);
    setActiveComponent("TableDoctor"); // Kembali ke dashboard
  };

  const handleEditSubmit = () => {
    setShowSuccess(true);
    setActiveComponent("TableDoctor"); // Kembali ke dashboard
  };

  // Fungsi untuk menutup popup sukses
  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <div>
      {activeComponent === "TableDoctor" && (
        <TableDoctor
          onAddPatientClick={handleShowFormTambahPasien}
          onInfoClick={handleShowInformasiPasien}
          onEditClick={handleShowFormEditPasien}
        />
      )}
      {activeComponent === "FormTambahPasien" && (
        <FormTambahPasien onClose={handleClose} onSubmit={handleFormSubmit} />
      )}
      {activeComponent === "InformasiPasien" && (
        <InformasiPasien onClose={handleClose} />
      )}
      {activeComponent === "FormEditPasien" && (
        <FormEditPasien onClose={handleClose} onSubmit={handleEditSubmit} />
      )}

      {/* PopUpSuccess */}
      {showSuccess && <PopUpSuccess onClose={handleCloseSuccess} />}
    </div>
  );
};

export default Dashboard;
