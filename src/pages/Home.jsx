import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import FeaturedVehicles from '../components/sections/FeaturedVehicles';
import Categories from '../components/sections/Categories';
import Performance from '../components/sections/Performance';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="w-full bg-[#050505]"
    >
      <Hero />
      <FeaturedVehicles />
      <Categories />
      <Performance />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default Home;