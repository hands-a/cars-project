import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { carsData } from '../data/carsData';
import { Link } from 'react-router-dom';

const Menu = () => {
  // Active filter state
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique categories dynamically
  const categories = ['All', ...new Set(carsData.map(car => car.category))];

  // Filter cars based on active category
  const filteredCars = activeFilter === 'All' 
    ? carsData 
    : carsData.filter(car => car.category === activeFilter);

  return (
    // Main Container
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] text-white pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-4">
            The Showroom
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Explore our complete lineup of Jeep vehicles. Filter by category to find the perfect match for your next adventure.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border 
                ${activeFilter === category 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-white/50 hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filtered Cars Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car) => (
              <motion.div
                layout 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={car.id}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a] rounded-xl mb-6 border border-white/5 transition-colors group-hover:border-white/20">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md text-white border border-white/10 px-3 py-1 font-bold z-10 rounded">
                    {car.category}
                  </span>
                </div>

                {/* Card Details */}
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-1">{car.name}</h3>
                    <p className="text-sm font-medium text-gray-400">{car.price}</p>
                  </div>
                  
                  {/* Navigation Button */}
                  <Link to={`/car/${car.id}`}>
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State Fallback */}
        {filteredCars.length === 0 && (
          <div className="text-center text-gray-500 mt-12">
            No vehicles found in this category.
          </div>
        )}

      </div>
    </motion.div>
  );
};

export default Menu;