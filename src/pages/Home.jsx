import { motion } from 'framer-motion';
import Hero from '../components/ui/Hero';
import BestSellers from '../components/ui/BestSellers';
import Testimonials from '../components/ui/Testimonials';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="w-full"
    >
      
      <Hero />

      
      <BestSellers />
      <Testimonials />
    </motion.div>
  );
};

export default Home;