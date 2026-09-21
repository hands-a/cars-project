import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Scale } from 'lucide-react';

const VehicleCard = ({ car, isFavorite = false, onToggleFavorite, isComparing = false, onToggleCompare }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group cursor-pointer bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all flex flex-col h-full relative"
    >
      {/* Top Actions */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <button 
          onClick={(e) => { e.preventDefault(); onToggleFavorite?.(car.id); }}
          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-colors"
          title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-black text-black' : 'text-white'}`} />
        </button>
        <button 
          onClick={(e) => { e.preventDefault(); onToggleCompare?.(car.id); }}
          className={`w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-colors ${isComparing ? 'bg-white text-black' : 'text-white'}`}
          title={isComparing ? "Remove from Compare" : "Add to Compare"}
        >
          <Scale className={`w-5 h-5`} />
        </button>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
        <img 
          src={car.image} 
          alt={car.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md text-white border border-white/10 px-3 py-1 font-bold rounded">
          {car.category}
        </span>
      </div>

      {/* Card Details */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold uppercase tracking-tight mb-1">{car.name}</h3>
        <p className="text-lg font-medium text-gray-300 mb-4">{car.formattedPrice}</p>
        
        {/* Quick Spec */}
        <div className="flex items-center gap-4 mb-6 mt-auto">
          <div className="text-sm text-gray-500 font-bold uppercase tracking-widest border-l-2 border-gray-700 pl-2">
            <span className="block text-xs text-gray-600">Power</span>
            {car.specs.horsepower} HP
          </div>
          <div className="text-sm text-gray-500 font-bold uppercase tracking-widest border-l-2 border-gray-700 pl-2">
            <span className="block text-xs text-gray-600">Drive</span>
            {car.specs.drivetrain}
          </div>
        </div>
        
        <div className="mt-4">
          <Link to={`/car/${car.id}`}>
            <button className="w-full py-3 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 text-sm font-bold uppercase tracking-widest rounded-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
