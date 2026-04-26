import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import JeepModel from '../../canvas/JeepModel';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    // Main Container
    <section className="relative w-full h-screen bg-[#050505] overflow-hidden">
      
      {/* Typography Layer */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-8 pointer-events-none">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-4">
            THE NEW <br /> 
            <span className="text-gray-600">JEEP</span>
          </h1>
          
          {/* CTA Button */}
          <Link to="/menu" className="pointer-events-auto mt-4 lg:mt-8 inline-block">
            <button className="px-8 py-3 lg:px-10 lg:py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all text-sm lg:text-base">
              DISCOVER MORE
            </button>
          </Link>
        </motion.div>
      </div>

      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 2, 10], fov: 30 }}>
          
          <Environment preset="night" />
          
          <Suspense fallback={null}>
            <JeepModel 
              scale={120}
              position={[2, -1, 0]}
              rotation={[0, -0.7, 0]}
            />
            
            <ContactShadows 
              position={[0, -1.01, 0]}
              opacity={0}
              scale={20}
              blur={2.5}
            />
          </Suspense>

          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.05}
            maxPolarAngle={Math.PI / 1}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;