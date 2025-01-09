import React from "react";
import Header from "../components/Header";
import NetWorthOverview from "../components/NetWorthOverview";
import ChartSection from "../components/ChartSection";
import AssetsSection from "../components/AssetsSection";
import TransactionsSection from "../components/TransactionsSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-4">
        <NetWorthOverview />
        <ChartSection />
        <AssetsSection />
        <TransactionsSection />
      </div>
    </div>
  );
};

export default Home;
