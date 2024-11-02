import Form from './FormRegister';
import Logo from '../../images/dokter-box.png';

const Register = () => {

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-white">
        <Form/>
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center">
        <div className="box flex flex-col">
          <h1 className='text-2xl font-bold text-customBlue mb-2'>Welcome to RespiraCare</h1>
          <p className='text-[#17568DFC] text-2xl mb-7'>Your Solution for Managing Respiratory Medication</p>
          <img src={Logo} alt="Logo" className='w-[400px]'/>
        </div>
      </div>
    </div>
  );
};

export default Register;
