import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gray-500 uppercase tracking-[0.4em] text-xs font-bold mb-4">Reach Out</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            Get in <span className="text-gray-600">Touch</span>
          </h1>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">Showroom Info</h2>
            <p className="text-gray-400 leading-relaxed mb-12">
              Whether you're looking to book a test drive, inquire about a specific Jeep model, or discuss financing options, our dedicated team of experts is here to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-6 group-hover:bg-white group-hover:text-black transition-all flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">Location</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Nasr City, Cairo<br />Egypt</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-6 group-hover:bg-white group-hover:text-black transition-all flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">Email Us</h4>
                  <p className="text-gray-500 text-sm">contact@jeep-edition.com<br />sales@jeep-edition.com</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-6 group-hover:bg-white group-hover:text-black transition-all flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">Call Us</h4>
                  <p className="text-gray-500 text-sm">+20 100 123 4567<br />+20 2 2345 6789</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-6 group-hover:bg-white group-hover:text-black transition-all flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">Opening Hours</h4>
                  <p className="text-gray-500 text-sm">Saturday - Thursday<br />10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#0a0a0a] p-10 rounded-2xl border border-white/5"
          >
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-8 text-center">Send a Message</h2>
            
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+20 1XX XXX XXXX"
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                <select className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer">
                  <option className="bg-[#0a0a0a] text-white">Book a Test Drive</option>
                  <option className="bg-[#0a0a0a] text-white">Pricing Inquiry</option>
                  <option className="bg-[#0a0a0a] text-white">General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Your Message</label>
                <textarea 
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-white text-black font-bold py-4 rounded-full hover:bg-gray-200 transition-colors uppercase tracking-widest text-sm mt-4"
                onClick={(e) => e.preventDefault()} 
              >
                Send Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;