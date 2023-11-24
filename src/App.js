import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/services' element={<p>Services Page</p>} />
        <Route path='/blog' element={<p>Blog Page</p>} />
        <Route path='/careers' element={<p>Careers Page</p>} />
        <Route path='/partner' element={<p>Partner Page</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
