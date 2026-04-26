import { motion } from 'framer-motion';
import { Compass, Shield, Award } from 'lucide-react';

const About = () => {
  return (
    // Main Container
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Legacy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          {/* Typography Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-500 uppercase tracking-[0.4em] text-xs font-bold mb-4">Our Legacy</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-8">
              Forged in <br/> <span className="text-gray-600">Adventure</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Since our inception, the Jeep Edition showroom has been dedicated to one singular vision: providing the ultimate off-road luxury experience. We don't just sell cars; we deliver the keys to unbridled freedom and precision engineering.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every vehicle in our lineup represents the pinnacle of modern design, combining rugged capability with sophisticated interiors that demand attention on any terrain.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/5"
          >
            <img 
              src="/images/franco.jpg" 
              alt="Jeep Adventure" 
              className="w-full h-full object-cover"
            />
            {/* Image Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </motion.div>
        </div>

        {/* Core Values Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4"
          >
            Why Choose Us
          </motion.h2>
          <div className="w-16 h-1 bg-white mx-auto mb-16"></div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Value Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0a0a0a] p-10 rounded-2xl border border-white/5 hover:border-white/20 transition-colors group text-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-black transition-all">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Unmatched Capability</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Engineered to conquer any environment. Our vehicles offer industry-leading 4x4 systems and terrain management.
            </p>
          </motion.div>

          {/* Value Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#0a0a0a] p-10 rounded-2xl border border-white/5 hover:border-white/20 transition-colors group text-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-black transition-all">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Premium Safety</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Advanced safety features and robust construction ensure peace of mind, whether on the highway or the trail.
            </p>
          </motion.div>

          {/* Value Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-[#0a0a0a] p-10 rounded-2xl border border-white/5 hover:border-white/20 transition-colors group text-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-black transition-all">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Luxury Defined</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Rugged on the outside, a sanctuary on the inside. Experience premium materials and cutting-edge technology.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;