import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './pages/Home';
// import PrivateRoute from './Routes/PrivateRoute';
import SyllabusPage from './pages/SyllabusPage';
import ContactUs from './pages/ContactUs';
import Groups from './pages/Groups';
import GroupList from './pages/GroupList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="/syllabus" element={<SyllabusPage/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/groups" element={<Groups/>}/>
        <Route path="/groups/:id" element={<GroupList />} />
        
      </Routes>
    </Router>
  );
}

export default App;
