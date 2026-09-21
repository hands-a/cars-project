import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import { useFavorites } from '../../hooks/useFavorites';
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, User, Settings, Heart, Clock } from 'lucide-react';
import { carsData } from '../../data/carsData';

const Profile = () => {
  const { user, logout } = useAuth();
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const favoriteCars = carsData.filter(car => favorites.includes(car.id));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-2 font-bold">Dashboard</p>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">My Account</h1>
            <div className="w-16 h-1 bg-white mt-6"></div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Profile Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <User className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-2">{user?.name}</h2>
              <p className="text-gray-400 mb-6">{user?.email}</p>
              <div className="w-full flex gap-4 pt-6 border-t border-white/5">
                <div className="flex-1">
                  <p className="text-2xl font-black text-white">{favorites.length}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Saved</p>
                </div>
                <div className="flex-1 border-l border-white/5">
                  <p className="text-2xl font-black text-white">0</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Orders</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
              <button className="w-full flex items-center justify-between p-6 border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <Settings className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                  <span className="font-bold uppercase tracking-widest text-sm text-gray-300 group-hover:text-white">Account Settings</span>
                </div>
              </button>
              <button className="w-full flex items-center justify-between p-6 border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                  <span className="font-bold uppercase tracking-widest text-sm text-gray-300 group-hover:text-white">Order History</span>
                </div>
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold uppercase tracking-widest">Recent Favorites</h3>
                <Link to="/favorites" className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors font-bold flex items-center gap-2">
                  View All
                </Link>
              </div>

              {favoriteCars.length > 0 ? (
                <div className="space-y-4">
                  {favoriteCars.slice(0, 3).map(car => (
                    <Link key={car.id} to={`/car/${car.id}`} className="flex items-center gap-6 p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all group">
                      <img src={car.image} alt={car.name} className="w-24 h-16 object-cover rounded-lg bg-[#111]" />
                      <div className="flex-1">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">{car.category}</p>
                        <h4 className="text-lg font-bold uppercase tracking-tight group-hover:text-white text-gray-200 transition-colors">{car.name}</h4>
                      </div>
                      <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-white">{car.formattedPrice}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <Heart className="w-12 h-12 text-gray-700 mb-4" />
                  <p className="text-gray-400 max-w-md">You haven't saved any vehicles yet. Explore our lineup to start building your dream garage.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
