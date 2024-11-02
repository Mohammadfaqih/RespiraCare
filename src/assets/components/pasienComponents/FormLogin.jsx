import { useNavigate } from 'react-router-dom';
import Logo from '../../images/Respiracare_Logo.png';

const Form = () => {
  const navigate = useNavigate();

  return (
    <div className="box">
      <div className='flex items-center'>
        <img src={Logo} alt="Logo respira Care" />
        <h1 className="text-3xl font-semibold text-customBlue">Welcome Back</h1>
      </div>
      <p className="font-medium text-lg text-[#17568D] mt-4">Welcome back! Please enter your details.</p>

      <div className="mt-8">
        {/* Email Input */}
        <div className="mb-4">
          <label className="text-lg font-medium">Email</label>
          <input
            type="email"
            className="w-full border-2 border-customBlue rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your email" name='email' id='email'
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="text-lg font-medium">Password</label>
          <input
            type="password"
            className="w-full border-2 border-customBlue rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your password" name='password' id='password'
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 font-medium text-base" htmlFor="remember">Remember for 30 days</label>
          </div>
          <button className="font-medium text-base text-customBlue">Forgot password?</button>
        </div>

        {/* Sign In & Create Account Buttons */}
        <div className="mt-8 flex flex-col gap-y-4">
          {/* Tombol Sign in yang akan mengarahkan ke dashboard pasien */}
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out
           transition-all py-3 rounded-xl bg-customBlue text-white text-lg font-bold" 
           onClick={() => navigate('/role/LoginAsPasien/dashboard')}>
            Sign in
          </button>

          {/* Tombol Create Account yang akan mengarahkan ke halaman register pasien */}
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out
           transition-all py-3 rounded-xl border-2 border-customBlue text-customBlue text-lg font-bold"
          onClick={() => navigate('/role/RegisterAsPasien')}>
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
