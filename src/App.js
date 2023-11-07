import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// import pages
import Home from './pages/home/Home';
import Main from './pages/main/Main';

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
            </Routes>
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
