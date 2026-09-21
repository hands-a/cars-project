import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] text-center border-t border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">Ready for your next adventure?</h2>
          <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto">
            Book a test drive today and experience the unmatched luxury and capability of a Jeep Edition vehicle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact">
              <button className="w-full sm:w-auto px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-gray-200 transition-colors">
                Book Test Drive
              </button>
            </Link>
            <Link to="/vehicles">
              <button className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/5 transition-colors">
                Explore Vehicles
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default CTA;
