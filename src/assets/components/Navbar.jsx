import { useEffect, useState } from 'react';
import logo from '../images/Respiracare_Logo.png';
import { MdMenu } from 'react-icons/md';
import MobileMenu from './MobileMenu';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 5);
      setOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar fixed w-full transition-all ${scroll ? 'bg-opacity-30 backdrop-blur-lg shadow-md py-6' : 'py-4'} z-50 bg-white`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="logo flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-8" />
          <span className="text-xl font-semibold hidden md:inline">RespiraCare</span>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:gap-12 lg:flex-grow lg:justify-center">
          {['Home', 'About', 'Doctors', 'Article', 'Contact'].map((item, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="inline-block py-1 px-3 hover:text-blue-500 font-semibold"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Login and Register */}
        <div className="flex items-center gap-2">
          <button className="border-2 text-lg border-customBlue text-customBlue
           px-5 py-2 rounded-full hover:bg-customBlue hover:text-white transition duration-300"
           onClick={() => navigate('role')}>
            Login
          </button>
          <button className="border-2 text-lg border-customBlue bg-customBlue
           text-white px-5 py-2 rounded-full hover:bg-white hover:text-customBlue
            transition duration-300" onClick={() => navigate('chooseRole')}>
            Register
          </button>
          <div className="lg:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={open} />
    </nav>
  );
};

export default Navbar;
