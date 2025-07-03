import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import Staff from './pages/Staff';
import Roster from './pages/Roster';
import AboutUs from './pages/AboutUs';
import Loader from './Loader'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/roster" element={<Roster />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Route>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
