import { useNavigate } from 'react-router-dom';
import Logo from '../../images/Respiracare_Logo.png';

const FormRegister = () => {
  const navigate = useNavigate();
  
  return (
    <div className="box">
      <div className='inline-flex items-center justify-center text-center'>
        <img src={Logo} alt="logo" />
        <h1 className='text-3xl text-[#1E6EB3] font-semibold'>Create your account</h1>
      </div>

      <div className="mt-4">
        {/* Name Input */}
        <div className="mb-2">
          <label className="text-md font-medium">Name</label>
          <input
            type="name"
            className="w-full border-2 border-customBlue rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-2">
          <label className="text-md font-medium">Email</label>
          <input
            type="email"
            className="w-full border-2 border-customBlue rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-2">
          <label className="text-md font-medium">Password</label>
          <input
            type="password"
            className="w-full border-2 border-customBlue rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your password"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="mb-2">
          <label className="text-md font-medium">Confirm Password</label>
          <input
            type="password"
            className="w-full border-2 border-customBlue rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Confirm password"
          />
        </div>

        {/* Sign In & Create Account Buttons */}
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all
           py-3 rounded-xl bg-customBlue text-white text-lg font-bold" onClick={() => navigate('/role/LoginAsPasien/dashboard')}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}

export default FormRegister
