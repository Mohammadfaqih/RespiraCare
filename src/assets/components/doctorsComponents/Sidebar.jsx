import { useState, useEffect } from "react";
import { SlArrowLeft } from "react-icons/sl";
import Logo from '../../images/Respiracare_Logo.png';
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import PopUp from '../PopUpComponents/PopUp';

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      if (isMobileView) {
        setOpen(false);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleSidebar = () => {
    if (!isMobile) {
      setOpen(!open);
    }
  };

  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  const closeLogoutPopup = () => {
    setShowLogoutPopup(false);
  };

  const confirmLogout = () => {
    setShowLogoutPopup(false);
    navigate('/');
  };

  return (
    <>
      <aside className={`
        ${open ? 'w-72' : 'w-20'} 
        h-screen 
        bg-customBlue 
        relative
        transition-all 
        duration-300 
        rounded-tr-3xl 
        rounded-br-3xl
        flex
        flex-col
      `}>
        <div className="p-5 flex-1">
          {/* Toggle button - hanya muncul di desktop (md ke atas) */}
          {!isMobile && (
            <SlArrowLeft
              onClick={toggleSidebar}
              className={`
                absolute 
                cursor-pointer 
                rounded-full 
                -right-3 
                top-9 
                w-7 
                h-7 
                flex 
                items-center 
                justify-center 
                bg-white 
                transition-transform 
                duration-300 
                shadow-md
                ${open ? '' : 'rotate-180'}
              `}
            />
          )}

          {/* Logo dan nama aplikasi */}
          <div className={`
            flex 
            ${isMobile ? 'justify-center' : 'items-center gap-x-4'}
          `}>
            <img 
              src={Logo} 
              alt="RespiraCare Logo" 
              className={`cursor-pointer duration-300 ${open && !isMobile ? 'w-12 h-12' : 'w-10 h-10'}`} 
            />
            {!isMobile && (
              <h1 className={`
                text-white 
                origin-left 
                font-semibold 
                text-2xl 
                duration-300 
                ${!open && 'scale-0'}
              `}>
                RespiraCare
              </h1>
            )}
          </div>

          {/* Menu Utama */}
          <ul className="pt-10">
            <li
              className={`text-white text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md`}
              onClick={() => navigate('/role/LoginAsDoctor/dashboard')}
            >
              <MdDashboard className="text-xl" />
              <span className={`${(!open || isMobile) && 'hidden'} origin-left duration-300`}>
                Dashboard
              </span>
            </li>

            <li
              className={`text-white text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-3`}
              onClick={() => navigate('/role/LoginAsDoctor/profile')}
            >
              <CgProfile className="text-xl" />
              <span className={`${(!open || isMobile) && 'hidden'} origin-left duration-300`}>
                My Profile
              </span>
            </li>

            <li
              className={`text-white text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-3`}
              onClick={() => navigate('/role/LoginAsDoctor/article')}
            >
              <RiArticleLine className="text-xl" />
              <span className={`${(!open || isMobile) && 'hidden'} origin-left duration-300`}>
                Article
              </span>
            </li>
          </ul>
        </div>

        {/* Logout di bagian bawah */}
        <div className="p-5">
          <li
            className={`text-white text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md list-none`}
            onClick={handleLogoutClick}
          >
            <CiLogout className="text-xl" />
            <span className={`${(!open || isMobile) && 'hidden'} origin-left duration-300`}>
              Logout
            </span>
          </li>
        </div>
      </aside>

      {/* PopUp Logout */}
      {showLogoutPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <PopUp 
            onConfirm={confirmLogout}
            onCancel={closeLogoutPopup}
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;