import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { carsData } from '../../data/carsData';
import VehicleCard from '../../components/vehicle/VehicleCard';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useFavorites } from '../../hooks/useFavorites';
import { useCompare } from '../../hooks/useCompare';
import { useCart } from '../../hooks/useCart';

const Vehicles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isComparing, toggleCompare } = useCompare();
  const { cart, toggleCart } = useCart();

  const categories = ['All', ...new Set(carsData.map(car => car.category))];

  const filteredAndSortedCars = useMemo(() => {
    let result = carsData;

    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(car => car.category === activeCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(car => 
        car.name.toLowerCase().includes(query) || 
        car.brand.toLowerCase().includes(query) ||
        car.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Sort
    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'power-high') {
      result = [...result].sort((a, b) => b.specs.horsepower - a.specs.horsepower);
    }

    return result;
  }, [searchQuery, activeCategory, sortBy]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] text-white pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-2 font-bold">The Lineup</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
            Our Vehicles
          </h1>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12">
          
          {/* Search */}
          <div className="relative w-full lg:w-1/3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search vehicles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 w-full lg:w-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border 
                  ${activeCategory === category 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-gray-400 border-white/10 hover:border-white/50 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sorting */}
          <div className="relative w-full lg:w-auto flex items-center gap-3">
             <SlidersHorizontal className="w-5 h-5 text-gray-500 hidden lg:block" />
             <select 
               value={sortBy} 
               onChange={(e) => setSortBy(e.target.value)}
               className="w-full lg:w-48 bg-[#0a0a0a] border border-white/10 rounded-full py-3 px-6 text-sm font-bold uppercase tracking-widest text-white appearance-none focus:outline-none focus:border-white transition-colors cursor-pointer"
             >
               <option value="default">Sort By: Default</option>
               <option value="price-low">Price: Low to High</option>
               <option value="price-high">Price: High to Low</option>
               <option value="power-high">Power: High to Low</option>
             </select>
          </div>
        </div>

        {/* Vehicles Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredAndSortedCars.map((car) => (
              <VehicleCard 
                key={car.id} 
                car={car} 
                isFavorite={isFavorite(car.id)}
                onToggleFavorite={toggleFavorite}
                isComparing={isComparing(car.id)}
                onToggleCompare={toggleCompare}
                isInCart={cart.includes(car.id)}
                onToggleCart={toggleCart}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredAndSortedCars.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-32 border border-white/5 rounded-2xl bg-[#0a0a0a] mt-8"
          >
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">No Vehicles Found</h3>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              We couldn't find any vehicles matching your current search or filter criteria. Please try adjusting them.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); setSortBy('default'); }}
              className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-gray-200 transition-colors"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}

      </div>
    </motion.div>
  );
};

export default Vehicles;