import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  // Mobile menu state
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Showroom', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  // Close mobile menu handler
  const closeMenu = () => setIsOpen(false);

  return (
    // Main Navigation Bar
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" onClick={closeMenu} className="text-2xl font-black tracking-tighter text-white uppercase z-50">
          JEEP <span className="text-gray-600">EDITION</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300
                  ${isActive ? 'text-white' : 'text-gray-500 hover:text-white'}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              Test Drive
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden absolute top-0 left-0 w-full bg-[#050505] flex flex-col items-center justify-center space-y-8 pt-20 overflow-hidden"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={closeMenu}
                  className={`text-2xl font-black uppercase tracking-widest transition-colors duration-300
                    ${isActive ? 'text-white' : 'text-gray-600 hover:text-white'}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <Link to="/contact" onClick={closeMenu} className="mt-8">
              <button className="px-10 py-4 border border-white/20 rounded-full text-sm font-bold text-white uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Book Test Drive
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;