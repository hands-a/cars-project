import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Lock, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { resetPassword } = useAuth();
  
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get('email');
    const codeParam = searchParams.get('code');
    
    if (emailParam && codeParam) {
      setEmail(emailParam);
      setCode(codeParam);
    } else {
      navigate('/login');
    }
  }, [location, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }
    
    setTimeout(() => {
      const result = resetPassword(email, code, formData.password);
      if (result.success) {
        setIsSuccess(true);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(result.error);
        setIsLoading(false);
      }
    }, 1000); // Simulate network delay
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#050505] text-white pt-32 pb-20 flex flex-col justify-center items-center">
      <div className="w-full max-w-md px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <Link to="/" className="text-3xl font-black tracking-tighter uppercase inline-block mb-8">
            JEEP <span className="text-gray-600">EDITION</span>
          </Link>
          <h1 className="text-3xl font-bold uppercase tracking-widest mb-2">New Password</h1>
          <p className="text-gray-500 text-sm">Secure your account with a new password.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 relative overflow-hidden">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-500 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p>{error}</p>
            </div>
          )}

          {isSuccess && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-500 text-sm">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <p>Password updated successfully!</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">New Password</label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="password" 
                  required
                  disabled={isLoading || isSuccess}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-11 pr-4 focus:border-white outline-none transition-colors disabled:opacity-50"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Confirm New Password</label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="password" 
                  required
                  disabled={isLoading || isSuccess}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-11 pr-4 focus:border-white outline-none transition-colors disabled:opacity-50"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading || isSuccess}
              className="w-full py-4 mt-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? 'Updating...' : (
                <>Update Password <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default ResetPassword;
