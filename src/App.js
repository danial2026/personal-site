import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import Home from './pages/DanialsWebsite.js';

function App() {
  return (
    <>
    <Router className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
