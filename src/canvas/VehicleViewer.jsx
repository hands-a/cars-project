import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, useProgress, Html } from '@react-three/drei';
import DynamicCarModel from './DynamicCarModel';
import ErrorBoundary from '../components/ui/ErrorBoundary';
import { Loader2 } from 'lucide-react';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center text-white bg-black/80 p-6 rounded-2xl backdrop-blur border border-white/10">
        <Loader2 className="w-8 h-8 animate-spin mb-4" />
        <p className="text-xs font-bold uppercase tracking-widest mb-2">Loading Model</p>
        <div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </Html>
  );
};

const VehicleViewer = ({ modelPath }) => {
  return (
    <div className="w-full h-[400px] lg:h-[600px] relative cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a]/50">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-4 left-4 z-10 flex gap-2">
         <span className="text-[10px] uppercase tracking-widest bg-black/80 backdrop-blur px-3 py-1.5 rounded text-white border border-white/10 flex items-center gap-2 pointer-events-none">
           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
           Interactive 3D View
         </span>
      </div>

      <ErrorBoundary>
        <Canvas camera={{ position: [4, 2, 6], fov: 35 }}>
          <Environment preset="studio" />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

          <Suspense fallback={<Loader />}>
            <DynamicCarModel 
              modelPath={modelPath} 
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
      </ErrorBoundary>
    </div>
  );
};

export default VehicleViewer;
