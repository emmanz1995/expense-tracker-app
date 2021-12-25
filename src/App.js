import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import { GlobalStyle } from './config/GlobalStyles';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import IncomeView from './pages/income/IncomeView';
import ExpenseView from './pages/expense/ExpenseView';
import { PrivateRoute } from './pages/auth/PrivateRoute';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={ <PrivateRoute><Dashboard /></PrivateRoute> } />
          <Route path="/income" element={ <PrivateRoute><IncomeView /></PrivateRoute> } />
          <Route path="/expense" element={ <PrivateRoute><ExpenseView /></PrivateRoute> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
