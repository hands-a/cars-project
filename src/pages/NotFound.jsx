import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white"
    >
      <h1 className="text-9xl font-black text-white/10 mb-4">404</h1>
      <h2 className="text-2xl font-bold uppercase tracking-widest mb-8">Page Not Found</h2>
      <Link to="/">
        <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-gray-200 transition-colors">
          Return to Showroom
        </button>
      </Link>
    </motion.div>
  );
};

export default NotFound;
