// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Heart, Scale, User, ShoppingCart } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useFavorites } from '../../hooks/useFavorites';
import { useCart } from '../../hooks/useCart';

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const { favorites } = useFavorites();
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky navbar styles
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup on unmount
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Close menu on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const navLinks = [
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent border-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" onClick={closeMenu} className="text-2xl font-black tracking-tighter text-white uppercase z-50">
          JEEP <span className="text-gray-600">EDITION</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === '/vehicles' && location.pathname.startsWith('/car/'));
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300
                  ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex gap-6 items-center">
          <button className="text-gray-400 hover:text-white transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/compare" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Compare">
            <Scale className="w-5 h-5" />
          </Link>
          <Link to="/favorites" className="relative text-gray-400 hover:text-red-500 transition-colors" aria-label="Favorites">
            <Heart className="w-5 h-5" />
            {favorites?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </Link>
          <button className="relative text-gray-400 hover:text-emerald-500 transition-colors" aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
            {cart?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
          <Link to={isAuthenticated ? "/profile" : "/login"} className="text-gray-400 hover:text-white transition-colors" aria-label="Profile">
            <User className="w-5 h-5" />
          </Link>
          <Link to="/contact">
            <button className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-widest hover:bg-white hover:text-black transition-colors ml-2">
              Test Drive
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle & Icons */}
        <div className="flex items-center gap-4 md:hidden z-50">
           <button className="relative text-white" aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
            {cart?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
           <Link to={isAuthenticated ? "/profile" : "/login"} onClick={closeMenu} className="text-white" aria-label="Profile">
            <User className="w-5 h-5" />
          </Link>
          <button 
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-[#050505] flex flex-col items-center justify-center space-y-8 z-40"
          >
            <Link to="/" onClick={closeMenu} className="text-2xl font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300">
              Home
            </Link>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={closeMenu}
                  className={`text-2xl font-black uppercase tracking-widest transition-colors duration-300
                    ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link to="/compare" onClick={closeMenu} className="text-2xl font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300">
              Compare
            </Link>
            <Link to={isAuthenticated ? "/profile" : "/login"} onClick={closeMenu} className="text-2xl font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300">
              {isAuthenticated ? "Profile" : "Sign In"}
            </Link>
            
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