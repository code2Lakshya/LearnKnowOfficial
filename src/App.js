import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<p>About Page</p>} />
        <Route path='/services' element={<p>Services Page</p>} />
        <Route path='/blog' element={<p>Blog Page</p>} />
        <Route path='/careers' element={<p>Careers Page</p>} />
        <Route path='/partner' element={<p>Partner Page</p>} />
      </Routes>
    </div>
  );
}

export default App;
