import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-black tracking-tighter uppercase mb-6">
              JEEP <span className="text-gray-600">EDITION</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
              Experience the ultimate off-road luxury. Precision engineered for the bold.
              Discover our exclusive lineup of premium vehicles designed for every adventure.
            </p>

            <div className="flex space-x-4">
              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              {/* Youtube */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-gray-400 hover:text-white text-sm transition-colors">Showroom</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Test Drive</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Top Models Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Top Models</h4>
            <ul className="space-y-4">
              <li><Link to="/car/1" className="text-gray-400 hover:text-white text-sm transition-colors">Wrangler Rubicon</Link></li>
              <li><Link to="/car/2" className="text-gray-400 hover:text-white text-sm transition-colors">Grand Cherokee</Link></li>
              <li><Link to="/car/3" className="text-gray-400 hover:text-white text-sm transition-colors">Gladiator</Link></li>
              <li><Link to="/car/4" className="text-gray-400 hover:text-white text-sm transition-colors">Wagoneer</Link></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Visit Us</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <p>Nasr City, Cairo<br />Egypt</p>
              </div>
              <div className="flex items-center mt-4">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <p>contact@jeep-edition.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Jeep Edition. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;