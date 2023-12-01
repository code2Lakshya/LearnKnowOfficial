import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {lazy,Suspense} from 'react';
import HomePage from './pages/HomePage/HomePage';
import Loader from './components/Loader/Loader';
import WrongPage from './pages/WrongPage/WrongPage';
import PartnerPage from './pages/PartnerWithUsPage/PartnerPage';
import Chatbot from './components/Chatbot/Chatbot';


const AboutPage=lazy(()=>import('./pages/AboutPage/AboutPage'));
const ServicesPage=lazy(()=>import('./pages/ServicesPage/ServicesPage'));
const CareerPage=lazy(()=>import('./pages/CareerPage/CareerPage'));

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<Suspense fallback={<Loader />}><AboutPage /></Suspense>} />
        <Route path='/services' element={<Suspense fallback={<Loader />}><ServicesPage /></Suspense>} />
        {/* <Route path='/blog' element={<p>Blog Page</p>} /> */}
        <Route path='/careers' element={<Suspense fallback={<Loader />}><CareerPage /></Suspense>} />
        <Route path='/partner' element={<PartnerPage />} />
        <Route path='*' element={<WrongPage />} />
      </Routes>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
