import { motion, AnimatePresence } from 'framer-motion';
import { useFavorites } from '../../hooks/useFavorites';
import { useCompare } from '../../hooks/useCompare';
import { carsData } from '../../data/carsData';
import VehicleCard from '../../components/vehicle/VehicleCard';
import { Link } from 'react-router-dom';
import { HeartOff } from 'lucide-react';

const Favorites = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { isComparing, toggleCompare } = useCompare();
  const favoriteCars = carsData.filter(car => favorites.includes(car.id));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#050505] pt-32 pb-20 text-white flex flex-col">
      <div className="max-w-7xl mx-auto px-8 w-full flex-grow">
        
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-2 font-bold">Your Selection</p>
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-6">Favorites</h1>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>

        {favoriteCars.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {favoriteCars.map(car => (
                <VehicleCard 
                  key={car.id} 
                  car={car} 
                  isFavorite={isFavorite(car.id)} 
                  onToggleFavorite={toggleFavorite} 
                  isComparing={isComparing(car.id)}
                  onToggleCompare={toggleCompare}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center border border-white/5 rounded-2xl bg-[#0a0a0a]"
          >
            <HeartOff className="w-16 h-16 text-gray-700 mb-6" />
            <h2 className="text-2xl font-black uppercase tracking-widest mb-4">No Favorites Yet</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              You haven't added any vehicles to your favorites. Explore our lineup and save the models you love.
            </p>
            <Link to="/vehicles">
              <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-gray-200 transition-colors">
                Explore Lineup
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
export default Favorites;
