// src/routes.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Menu from './pages/Menu';
import SingleCar from './pages/SingleCar';
import About from './pages/About';
import Contact from './pages/Contact';


const AppRoutes = () => {
  const location = useLocation();

  return (
    
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<SingleCar />} />
        <Route path="/menu" element={<Menu />} />
        
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;