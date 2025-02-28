import React from 'react'; // Remove useState and useEffect
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './components/context/LanguageContext'; // Import the LanguageProvider
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Geoportal from './components/Geoportal';

import { SpeedInsights } from '@vercel/speed-insights/react'; // Import SpeedInsights component
import './App.css';

const App = () => {
  return (
    <LanguageProvider> {/* Wrap your application with LanguageProvider */}
      <Router>
        <>
          <Navbar />
          <main>
            <Routes>
              <Route path="/geoportal" element={<Geoportal />} />
            </Routes>
            {/* Add SpeedInsights at a specific place in the interface */}
            <SpeedInsights />
          </main>
          <Footer />
        </>
      </Router>
    </LanguageProvider>
  );
};

export default App;
