import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import { GlobalStyle } from './config/GlobalStyles';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import IncomeView from "./pages/income/IncomeView";
import ExpenseView from "./pages/expense/ExpenseView";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/income" element={<IncomeView />} />
          <Route path="/expense" element={<ExpenseView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
