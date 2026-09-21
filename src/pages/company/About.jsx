import { motion } from 'framer-motion';
import { Shield, Zap, Globe } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div initial="hidden" animate="show" variants={containerVariants} className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div variants={itemVariants} className="text-center mb-20">
          <p className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-2 font-bold">Our Legacy</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">About Us</h1>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div variants={itemVariants} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2525&auto=format&fit=crop" alt="Supercar in motion" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold uppercase tracking-widest mb-6">Engineering Excellence</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              For over three decades, we have been at the forefront of automotive innovation. Our passion is crafting machines that blur the line between art and engineering. Every vehicle in our lineup is a testament to our relentless pursuit of perfection.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We don't just build cars; we create experiences that ignite the senses and redefine what's possible on the road. Welcome to the pinnacle of performance.
            </p>
          </motion.div>
        </div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Shield className="w-8 h-8" />, title: "Uncompromising Safety", desc: "Advanced aerospace-grade materials and cutting-edge sensor technology keep you secure at any speed." },
            { icon: <Zap className="w-8 h-8" />, title: "Electrifying Performance", desc: "Next-generation powertrains delivering instant torque and unparalleled acceleration without compromise." },
            { icon: <Globe className="w-8 h-8" />, title: "Global Network", desc: "Exclusive service centers and dedicated concierge support available to our owners worldwide." }
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants} className="p-8 bg-[#0a0a0a] rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-white/20 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
export default About;