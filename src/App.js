import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ConfirmPage from './pages/ConfirmPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/detail" element={<DetailPage />} />
        <Route exact path="/confirmPage" element={<ConfirmPage />} />
      </Routes>
    </Router>
  );
};

export default App;
