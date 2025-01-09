import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <div className="p-4">
          <Routes>
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
            <Route
              path="/assets"
              element={<Assets data={data} chartData={data.chartData} />}
            />
            <Route
              path="/transactions"
              element={
                <Transaction
                  transactions={data.transactions}
                  chartData={data.chartData}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
