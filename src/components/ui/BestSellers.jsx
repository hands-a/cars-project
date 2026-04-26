import { motion } from 'framer-motion';
import { carsData } from '../../data/carsData';
import { Link } from 'react-router-dom';

const BestSellers = () => {
  return (
    // Main Section
    <section className="py-20 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">BEST SELLERS</h2>
          <div className="w-20 h-1 bg-white mt-4"></div>
        </motion.div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {carsData.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-[#111] rounded-xl mb-4 border border-white/5">
                <motion.img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Brand Badge */}
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-white text-black px-2 py-1 font-bold">
                  {car.brand}
                </span>
              </div>

              {/* Car Details */}
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{car.category}</p>
                  <h3 className="text-xl font-bold">{car.name}</h3>
                </div>
                <p className="text-lg font-medium text-gray-300">{car.price}</p>
              </div>

              {/* Action Button */}
              <Link to={`/car/${car.id}`}>
                <button className="w-full mt-6 py-3 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 text-sm font-bold uppercase tracking-tighter rounded-lg">
                  View Details
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;