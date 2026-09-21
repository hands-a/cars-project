import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Luxury SUV', img: '/images/image copy.png', link: '/vehicles?cat=luxury' },
  { name: 'Off-Road', img: '/images/image copy 6.png', link: '/vehicles?cat=offroad' },
  { name: 'Pickup', img: '/images/image copy 2.png', link: '/vehicles?cat=pickup' }
];

const Categories = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white border-t border-b border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
             <p className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-2 font-bold">Find Your Path</p>
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Categories</h2>
           </motion.div>
           <Link to="/vehicles" className="hidden md:inline-block text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors border-b border-gray-400 hover:border-white pb-1">
             View All Vehicles
           </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Link to={cat.link} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="relative h-[400px] rounded-2xl overflow-hidden group">
                 <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                 <div className="absolute bottom-8 left-8">
                   <h3 className="text-2xl font-bold uppercase tracking-widest">{cat.name}</h3>
                   <div className="w-0 h-0.5 bg-white mt-4 group-hover:w-12 transition-all duration-300"></div>
                 </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Categories;
