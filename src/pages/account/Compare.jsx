import { motion } from 'framer-motion';
import { useCompare } from '../../hooks/useCompare';
import { carsData } from '../../data/carsData';
import { Link } from 'react-router-dom';
import { Scale, X, Check } from 'lucide-react';

const Compare = () => {
  const { compareList, toggleCompare, clearCompare } = useCompare();
  const compareCars = carsData.filter(car => compareList.includes(car.id));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#050505] pt-32 pb-20 text-white flex flex-col">
      <div className="max-w-7xl mx-auto px-8 w-full flex-grow">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <p className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-2 font-bold">Head to Head</p>
            <h1 className="text-5xl font-black uppercase tracking-tighter">Compare</h1>
            <div className="w-16 h-1 bg-white mt-6"></div>
          </div>
          {compareCars.length > 0 && (
            <button 
              onClick={clearCompare}
              className="mt-6 md:mt-0 px-6 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        {compareCars.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center border border-white/5 rounded-2xl bg-[#0a0a0a]"
          >
            <Scale className="w-16 h-16 text-gray-700 mb-6" />
            <h2 className="text-2xl font-black uppercase tracking-widest mb-4">No Vehicles Selected</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Select up to 3 vehicles from our lineup to compare their specifications side-by-side.
            </p>
            <Link to="/vehicles">
              <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-gray-200 transition-colors">
                Explore Lineup
              </button>
            </Link>
          </motion.div>
        ) : (
          <div className="overflow-x-auto pb-8">
            <div className="min-w-[800px]">
              {/* Header Row */}
              <div className="grid grid-cols-4 gap-6 border-b border-white/10 pb-6 mb-6">
                <div className="col-span-1 flex flex-col justify-end">
                  <h3 className="text-xl font-bold uppercase tracking-widest text-gray-500">Specifications</h3>
                </div>
                {compareCars.map(car => (
                  <div key={car.id} className="col-span-1 relative bg-[#0a0a0a] rounded-xl p-4 border border-white/5">
                    <button 
                      onClick={() => toggleCompare(car.id)}
                      className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-gray-400 hover:text-white hover:bg-red-500/20 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <img src={car.image} alt={car.name} className="w-full aspect-[4/3] object-cover rounded-lg mb-4" />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">{car.category}</p>
                    <h4 className="text-lg font-bold uppercase tracking-tight mb-1 line-clamp-1">{car.name}</h4>
                    <p className="text-white font-medium">{car.formattedPrice}</p>
                    <Link to={`/car/${car.id}`} className="block mt-4">
                      <button className="w-full py-2 border border-white/10 text-xs font-bold uppercase tracking-widest rounded hover:bg-white hover:text-black transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                ))}
                {/* Empty slots placeholders */}
                {Array.from({ length: 3 - compareCars.length }).map((_, i) => (
                  <div key={`empty-${i}`} className="col-span-1 border border-dashed border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-[250px]">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4 text-gray-600">
                      +
                    </div>
                    <p className="text-xs uppercase tracking-widest text-gray-600 font-bold">Add Vehicle</p>
                  </div>
                ))}
              </div>

              {/* Data Rows */}
              <div className="space-y-6">
                {[
                  { label: 'Engine', key: 'engine' },
                  { label: 'Horsepower', key: 'horsepower' },
                  { label: 'Drivetrain', key: 'drivetrain' },
                  { label: '0-60 mph', key: 'acceleration' },
                  { label: 'Top Speed', key: 'topSpeed' },
                  { label: 'Towing Capacity', key: 'towingCapacity' },
                  { label: 'Fuel Economy', key: 'fuelEconomy' }
                ].map((spec) => (
                  <div key={spec.key} className="grid grid-cols-4 gap-6 items-center border-b border-white/5 pb-6">
                    <div className="col-span-1 text-sm font-bold uppercase tracking-widest text-gray-400">
                      {spec.label}
                    </div>
                    {compareCars.map(car => (
                      <div key={car.id} className="col-span-1 text-lg font-medium">
                        {car.specs[spec.key]}
                      </div>
                    ))}
                    {Array.from({ length: 3 - compareCars.length }).map((_, i) => (
                      <div key={`empty-spec-${i}`} className="col-span-1 text-gray-800">-</div>
                    ))}
                  </div>
                ))}

                {/* Features Highlights */}
                <div className="grid grid-cols-4 gap-6 items-start pt-4">
                  <div className="col-span-1 text-sm font-bold uppercase tracking-widest text-gray-400">
                    Key Features
                  </div>
                  {compareCars.map(car => (
                    <div key={car.id} className="col-span-1 flex flex-col gap-3">
                      {car.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                  {Array.from({ length: 3 - compareCars.length }).map((_, i) => (
                    <div key={`empty-feat-${i}`} className="col-span-1 text-gray-800">-</div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Compare;
