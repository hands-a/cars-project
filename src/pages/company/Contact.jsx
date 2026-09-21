import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="text-center mb-20">
          <p className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-2 font-bold">Get in Touch</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Contact Us</h1>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-8">Headquarters</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-sm mb-1">Address</h3>
                  <p className="text-gray-400">100 Apex Boulevard<br />Silicon Valley, CA 94025<br />United States</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gray-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-sm mb-1">Phone</h3>
                  <p className="text-gray-400">+1 (800) 555-APEX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-gray-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-sm mb-1">Email</h3>
                  <p className="text-gray-400">concierge@apexmotors.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-gray-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-sm mb-1">Hours</h3>
                  <p className="text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM (PST)<br />Sat - Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl relative overflow-hidden">
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-8">Send a Message</h2>
            
            {isSubmitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-sm p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">Message Received</h3>
                <p className="text-gray-400 text-sm">Our concierge team will respond to your inquiry shortly.</p>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="bg-transparent border-b border-white/20 pb-2 focus:border-white outline-none transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="bg-transparent border-b border-white/20 pb-2 focus:border-white outline-none transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Subject</label>
                <input required type="text" name="subject" value={formData.subject} onChange={handleChange} className="bg-transparent border-b border-white/20 pb-2 focus:border-white outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Message</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" className="bg-transparent border-b border-white/20 pb-2 focus:border-white outline-none transition-colors resize-none" />
              </div>
              <button 
                disabled={isSubmitting}
                type="submit" 
                className="w-full flex items-center justify-center gap-2 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
export default Contact;