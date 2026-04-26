import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';
import DynamicCarModel from '../canvas/DynamicCarModel';
import { carsData } from '../data/carsData';
import { ArrowLeft, Settings, Zap, Shield } from 'lucide-react';

const SingleCar = () => {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));

  // Error State: Car Not Found
  if (!car) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#050505] text-white">
        <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
        <Link to="/" className="text-gray-400 hover:text-white underline">Return to Showroom</Link>
      </div>
    );
  }

  return (
    // Main Container with Page Transition
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] text-white pt-24 pb-12 overflow-hidden flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-8 w-full flex-grow flex flex-col">
        
        {/* Back Navigation */}
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-white transition-colors mb-4 group uppercase tracking-widest text-xs font-bold z-10 relative">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-2 transition-transform" />
          Back to Lineup
        </Link>

        {/* Content Grid (UI Left, 3D Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-grow items-center">
          
          
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col justify-center z-10"
          >
            <p className="text-gray-500 tracking-[0.4em] uppercase text-xs mb-3 font-bold">{car.brand} • {car.category}</p>
            <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter leading-none">{car.name}</h1>
            <p className="text-4xl font-light mb-8 text-white">{car.price}</p>
            
            <p className="text-gray-400 leading-relaxed mb-10 text-lg">
              Explore the {car.name} in full 3D. Drag to rotate, discover every angle, and experience the ultimate off-road engineering before you even step inside.
            </p>

            {/* Car Specifications */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="flex flex-col items-center p-6 bg-[#0a0a0a] rounded-xl border border-white/5">
                <Zap className="w-6 h-6 mb-3 text-white" />
                <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Power</span>
                <span className="font-bold text-lg">470 HP</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-[#0a0a0a] rounded-xl border border-white/5">
                <Settings className="w-6 h-6 mb-3 text-white" />
                <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Engine</span>
                <span className="font-bold text-lg">V8 6.4L</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-[#0a0a0a] rounded-xl border border-white/5">
                <Shield className="w-6 h-6 mb-3 text-white" />
                <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Drive</span>
                <span className="font-bold text-lg">4x4</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors uppercase tracking-widest text-sm">
              Book Test Drive
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-full h-[500px] lg:h-full relative cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a]/50"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none" />

            <Canvas camera={{ position: [4, 2, 6], fov: 35 }}>
              <Environment preset="studio" />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

              <Suspense fallback={
                <mesh>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshBasicMaterial color="#333" wireframe />
                </mesh>
              }>
                {/* Dynamic 3D Model */}
                <DynamicCarModel 
                  modelPath={car.modelPath} 
                  scale={90} 
                  position={[0, -1.2, 0]} 
                />
                
                <ContactShadows 
                  position={[0, -1.21, 0]} 
                  opacity={0.7} 
                  scale={15} 
                  blur={2} 
                  far={4} 
                />
              </Suspense>

              <OrbitControls 
                enableZoom={true} 
                minDistance={3} 
                maxDistance={10} 
                enablePan={false}
                enableDamping={true}
                dampingFactor={0.05}
                maxPolarAngle={Math.PI / 2}
                autoRotate={true} 
                autoRotateSpeed={0.5}
              />
            </Canvas>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default SingleCar;