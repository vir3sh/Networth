import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import NetWorthOverview from "./components/NetWorthOverview";
import ChartSection from "./components/ChartSection";
import AssetsSection from "./components/AssetsSection";
import TransactionsSection from "./components/TransactionsSection";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Home from "./pages/Home";
import data from "./assets/data";
import Assets from "./pages/Assets";
import Transaction from "./pages/Transaction";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        {/* <nav className="bg-white shadow-md p-4">
          <div className="flex justify-around">
            <Link to="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </div>
        </nav> */}
        <div className="p-4">
          <Routes>
            q
            <Route
              path="/"
              element={
                <div>
                  <NetWorthOverview user={data.user} />
                  <ChartSection chartData={data.chartData} />
                  <AssetsSection assets={data.assets} />
                  <TransactionsSection transactions={data.transactions} />
                </div>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/assets" element={<Assets />} />
            <Route
              path="/transactions"
              element={<Transaction transactions={data.transactions} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
