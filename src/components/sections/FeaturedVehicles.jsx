// src/components/sections/FeaturedVehicles.jsx
import { motion } from 'framer-motion';
import { carsData } from '../../data/carsData';
import { Link } from 'react-router-dom';

const FeaturedVehicles = () => {
  return (
    <section className="py-24 bg-[#050505] text-white relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 flex flex-col items-center text-center">
          <p className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-2 font-bold">The Lineup</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Featured Vehicles</h2>
          <div className="w-16 h-1 bg-white mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {carsData.slice(0,3).map((car, index) => (
            <motion.div key={car.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a] rounded-xl mb-6 border border-white/5 transition-colors group-hover:border-white/20">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md text-white border border-white/10 px-3 py-1 font-bold rounded">
                  {car.category}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{car.name}</h3>
                  <p className="text-lg font-medium text-gray-300">{car.formattedPrice}</p>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">{car.shortDescription}</p>
              </div>
              <Link to={`/car/${car.id}`} className="block mt-6">
                <button className="w-full py-4 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 text-sm font-bold uppercase tracking-widest rounded-full">
                  Explore Model
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedVehicles;