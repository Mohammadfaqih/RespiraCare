import { useNavigate } from 'react-router-dom';
import DoctorIcon from '../images/dokter-icon.png';
import PatientIcon from '../images/pasien-icon.png';

const Role = () => {
  const navigate = useNavigate();
  return (
    <div className="box">
      <h1 className="text-3xl font-semibold text-customBlue">Welcome to RespiraCare</h1>
      <p className='text-2xl font-bold text-[#17568DFC] mt-4'>Choose Role</p>

      <div className="mt-8">
        <div className="flex justify-around gap-2">
          {/* Navigasi untuk Login sebagai Doctor */}
          <img
            src={DoctorIcon}
            alt="DoctorIcon"
            className="relative active:scale-[.98] active:duration-75 
               hover:scale-[1.01] ease-in-out transition-all 
               bg-customBlue py-8 px-10 rounded-xl cursor-pointer 
               hover:bg-gradient-to-r from-customBlue to-[#17568DFC]"
            onClick={() => navigate('/role/LoginAsDoctor')} 
          />

          {/* Navigasi untuk Login sebagai Patsien */}
          <img
            src={PatientIcon}
            alt="PatientIcon"
            className="relative active:scale-[.98] active:duration-75 
               hover:scale-[1.01] ease-in-out transition-all 
               bg-customBlue py-8 px-10 rounded-xl cursor-pointer 
               hover:bg-gradient-to-r from-customBlue to-[#17568DFC]"
            onClick={() => navigate('/role/LoginAsPasien')} 
          />
        </div>
      </div>
    </div>
  );
};

export default Role;
