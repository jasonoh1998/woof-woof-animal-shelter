import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// import pages
import Home from './pages/home/home';
import Main from './pages/main/main';
import Breed from './pages/breeds/breeds';
import BreedDetail from './pages/breeds/breedDetail';
import Contact from './pages/contact/contact';

import './App.css';

function ProtectedRoute({ children }) {
  const token = sessionStorage.getItem('token');
  return token ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={
          <ProtectedRoute>
            <Routes>
              <Route path="/main" element={<Main />} />
              <Route path="/breeds" element={<Breed />} />
              <Route path="/breed/:breedName" element={<BreedDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
