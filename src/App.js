import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './pages/Home';
// import PrivateRoute from './Routes/PrivateRoute';
import Groups from './pages/Groups';
import SyllabusPage from './pages/SyllabusPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="/groups" element={<Groups/>}/>
        <Route path="/syllabus" element={<SyllabusPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
