import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Dashboard from './dashboard';
import Career from './career';
import Navbar from './Navbar';
import Login from './login';
import { createContext, useState, useEffect} from 'react';
import Logout from './logout';

export const CheckAuth = createContext();

function App() {
  const [authValue, setAuthValue] = useState({});

  useEffect(() => {
    const storedAuthValue = JSON.parse(localStorage.getItem("authValue"));
    if (storedAuthValue) {
      setAuthValue(storedAuthValue);
    }
  }, []);

  return (
    <>
      <CheckAuth.Provider value={{ authValue, setAuthValue }}>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/career" element={<Career />} />
            <Route path="/login" element={<Login />} />
            <Route path='/logout' element={<Logout/>} />
          </Routes>
        </Router>
      </CheckAuth.Provider>
    </>
  );
}

export default App;
