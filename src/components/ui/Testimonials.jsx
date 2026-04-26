import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Rana ",
    role: "Off-Road Enthusiast",
    text: "The purchasing experience was as premium as the vehicles themselves. The team truly understands off-road capability and luxury.",
  },
  {
    id: 2,
    name: "Abdullah",
    role: "Business Executive",
    text: "I was looking for a vehicle that combines ruggedness with executive comfort. The Grand Cherokee I got here exceeded all expectations.",
  },
  {
    id: 3,
    name: "Ahmed",
    role: "Adventure Photographer",
    text: "Exceptional service from start to finish. The Wrangler I purchased has been my reliable companion in the toughest terrains.",
  }
];

const Testimonials = () => {
  return (
    // Main Section
    <section className="py-24 bg-[#050505] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <p className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-2 font-bold">Client Stories</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Hear From Them</h2>
          <div className="w-16 h-1 bg-white mt-6"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#0a0a0a] p-10 rounded-2xl border border-white/5 hover:border-white/20 transition-colors relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-white/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                "{item.text}"
              </p>
              
              <div>
                <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{item.name}</h4>
                <p className="text-gray-600 text-xs uppercase tracking-widest">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;