import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import OurWork from './pages/OurWork';

function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.hash.replace('#', '') || 'home'
  );

  // 🔥 ADD THIS - Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.replace('#', '') || 'home');
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch(currentPath) {
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'portfolio':
        return <OurWork />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;