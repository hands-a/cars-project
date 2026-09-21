import { motion } from 'framer-motion';

const Performance = () => {
  return (
    <section className="py-32 bg-[#050505] text-white relative overflow-hidden z-10">
      <div className="absolute inset-0 z-0 opacity-30">
        <img src="/images/franco.jpg" alt="Performance Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-4 font-bold">Uncompromising Power</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-tight mb-8">
            Engineered for <br/> the <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Extreme</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
            Experience the pinnacle of 4x4 capability. Our advanced powertrains and terrain management systems ensure dominance over any landscape.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-4xl font-black mb-2 text-white">510<span className="text-xl text-gray-500">HP</span></h4>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Max Power</p>
            </div>
            <div>
              <h4 className="text-4xl font-black mb-2 text-white">4x4<span className="text-xl text-gray-500"></span></h4>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Legendary Drive</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Performance;
