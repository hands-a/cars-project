// src/App.jsx
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes';

function App() {
  return (
   
    <div className="app-container bg-[#000000] text-gray-900 min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow pt-24"> 
      
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;