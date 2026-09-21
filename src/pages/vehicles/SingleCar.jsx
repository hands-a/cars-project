// src/pages/SingleCar.jsx
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import VehicleViewer from '../../canvas/VehicleViewer';
import { carsData } from '../../data/carsData';
import { ArrowLeft, ChevronLeft, Maximize2, Shield, Settings, Zap, ArrowRight, Heart, Scale, ShoppingCart } from 'lucide-react';
import { useFavorites } from '../../hooks/useFavorites';
import { useCompare } from '../../hooks/useCompare';
import { useCart } from '../../hooks/useCart';

const SingleCar = () => {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('overview');
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isComparing, toggleCompare } = useCompare();
  const { cart, toggleCart } = useCart();
  const isInCart = cart.includes(car?.id);

  // Error State: Redirect to 404
  if (!car) {
    return <Navigate to="/404" replace />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] text-white pt-24 pb-12 overflow-x-hidden flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-8 w-full flex-grow flex flex-col">
        
        {/* Navigation & Header */}
        <div className="flex justify-between items-center mb-6">
          <Link to="/vehicles" className="inline-flex items-center text-gray-500 hover:text-white transition-colors group uppercase tracking-widest text-xs font-bold z-10 relative">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-2 transition-transform" />
            Back to Lineup
          </Link>
          <div className="flex gap-4 z-10 relative">
            <button 
              onClick={() => toggleCompare(car.id)}
              className={`p-4 border rounded-xl flex items-center justify-center transition-colors
                ${isComparing(car.id) ? 'bg-amber-500 border-amber-500 text-white' : 'border-white/10 hover:border-amber-500 hover:text-amber-500'}`}
              title={isComparing(car.id) ? "Remove from Compare" : "Add to Compare"}
            >
              <Scale className={`w-6 h-6`} />
            </button>
            <button 
              onClick={() => toggleCart(car.id)}
              className={`p-4 border rounded-xl flex items-center justify-center transition-colors
                ${isInCart ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-white/10 hover:border-emerald-500 hover:text-emerald-500'}`}
              title={isInCart ? "Remove from Cart" : "Add to Cart"}
            >
              <ShoppingCart className={`w-6 h-6 ${isInCart ? 'fill-white' : ''}`} />
            </button>
            <button 
              onClick={() => toggleFavorite(car.id)}
              className="text-gray-500 hover:text-white transition-colors flex items-center justify-center w-10 h-10"
            >
              <Heart className={`w-6 h-6 ${isFavorite(car.id) ? 'fill-white text-white' : ''}`} />
            </button>
          </div>
        </div>

        {/* Content Grid (UI Left, 3D Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col justify-center z-10"
          >
            <p className="text-gray-500 tracking-[0.4em] uppercase text-xs mb-3 font-bold">{car.brand} • {car.category}</p>
            <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter leading-none">{car.name}</h1>
            <p className="text-4xl font-light mb-8 text-white">{car.formattedPrice}</p>
            
            <p className="text-gray-400 leading-relaxed mb-10 text-lg">
              {car.shortDescription}
            </p>

            {/* Car Specifications */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="flex flex-col items-center p-6 bg-[#0a0a0a] rounded-xl border border-white/5">
                <Zap className="w-6 h-6 mb-3 text-white" />
                <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Power</span>
                <span className="font-bold text-lg">{car.specs.horsepower} HP</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-[#0a0a0a] rounded-xl border border-white/5">
                <Settings className="w-6 h-6 mb-3 text-white" />
                <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Engine</span>
                <span className="font-bold text-lg">{car.specs.engine}</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-[#0a0a0a] rounded-xl border border-white/5">
                <Shield className="w-6 h-6 mb-3 text-white" />
                <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Drive</span>
                <span className="font-bold text-lg">{car.specs.drivetrain}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Book Test Drive
            </button>
          </motion.div>

          {/* 3D Viewer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-full"
          >
            <VehicleViewer modelPath={car.modelPath} />
          </motion.div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="border-t border-white/10 pt-16">
          <div className="flex gap-8 border-b border-white/10 mb-8 overflow-x-auto pb-4">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`uppercase tracking-widest text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'overview' ? 'text-white border-b-2 border-white pb-4 -mb-[17px]' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('features')}
              className={`uppercase tracking-widest text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'features' ? 'text-white border-b-2 border-white pb-4 -mb-[17px]' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Key Features
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div 
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12"
              >
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">The Ultimate Driving Machine</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{car.fullDescription}</p>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl border border-white/5 p-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Technical Specifications</h3>
                  <div className="space-y-4">
                     <div className="flex justify-between border-b border-white/5 pb-2">
                       <span className="text-gray-400">0-60 mph</span>
                       <span className="font-bold">{car.specs.acceleration}</span>
                     </div>
                     <div className="flex justify-between border-b border-white/5 pb-2">
                       <span className="text-gray-400">Fuel Economy</span>
                       <span className="font-bold">{car.specs.fuelEconomy}</span>
                     </div>
                     <div className="flex justify-between border-b border-white/5 pb-2">
                       <span className="text-gray-400">Top Speed</span>
                       <span className="font-bold">{car.specs.topSpeed}</span>
                     </div>
                     <div className="flex justify-between pb-2">
                       <span className="text-gray-400">Towing Capacity</span>
                       <span className="font-bold">{car.specs.towingCapacity}</span>
                     </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'features' && (
              <motion.div 
                key="features"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {car.features.map((feature, i) => (
                  <div key={i} className="bg-[#0a0a0a] rounded-xl border border-white/5 p-6 flex flex-col justify-center items-center text-center group hover:bg-[#111] transition-colors">
                    <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                      {i + 1}
                    </span>
                    <p className="font-bold">{feature}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
};

export default SingleCar;