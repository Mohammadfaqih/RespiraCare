import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-0 w-full
          h-screen z-20" // Mengatur top di bawah navbar
        >
          <div className="text-xl font-semibold uppercase
          bg-customBlue text-white py-10 m-6 rounded-3xl border border-white">
            <ul className="flex flex-col items-center gap-6">
              <li className="hover:text-gray-200 cursor-pointer transition duration-300">Home</li>
              <li className="hover:text-gray-200 cursor-pointer transition duration-300">About</li>
              <li className="hover:text-gray-200 cursor-pointer transition duration-300">Features</li>
              <li className="hover:text-gray-200 cursor-pointer transition duration-300">Info</li>
              <li className="hover:text-gray-200 cursor-pointer transition duration-300">Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
