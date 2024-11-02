import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from '../images/Respiracare_Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#17568DFC] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={Logo}
              alt="RespiraCare Logo"
              className="md:w-[40%]"
            />
          </div>

          {/* Kontak Email dan Media Sosial */}
          <div>
            <p className="text-white text-lg mb-2">Email</p>
            <a href="mailto:humic@telkomuniversity.ac.id" className="text-white mb-4">humic@telkomuniversity.ac.id</a>

            <p className="text-white text-lg mb-2">Contact us</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Alamat */}
          <div>
            <p className="text-white text-lg mb-2">Address</p>
            <p className="text-white">
              Jl. Telekomunikasi, Terusan Buah Batu <br />
              Bandung, Jawa Barat, Indonesia. 40257
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 px-3 py-4 text-center bg-[#113F67] w-full">
          <p className="text-white text-sm">
            &copy; 2024 <span className="font-bold">HUMIC Research Center</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
