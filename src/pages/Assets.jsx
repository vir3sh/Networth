import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// JSON Data
const jsonData = {
  user: {
    name: "Sahil",
    netWorth: "₹1,23,55,059",
    lastUpdated: "24 hours ago",
  },
  chartData: {
    categories: [
      "Banks",
      "Investments",
      "Insurance",
      "Credits",
      "Loans",
      "Assets",
    ],
    amounts: [1.5, 3, 1.5], // Expense, Income, Total
  },
  assets: [
    {
      category: "Banks",
      totalAmount: "₹10,500",
      details: [
        {
          title: "HDFC Bank",
          account: "01234562087",
          amount: "₹5,200",
          logo: "🏦",
        },
        {
          title: "Bank Of Baroda",
          account: "01234562087",
          amount: "₹5,200",
          logo: "🏦",
        },
      ],
    },
    {
      category: "Investments",
      totalAmount: "₹10,500",
      details: [
        {
          title: "Muthoot Finance",
          account: "01234562087",
          amount: "₹5,200",
          logo: "📈",
        },
        {
          title: "Muthoot Finance",
          account: "01234562087",
          amount: "₹5,200",
          logo: "📈",
        },
      ],
    },
    {
      category: "Insurance",
      totalAmount: "₹10,500",
      details: [
        {
          title: "TATA AIG Insurance",
          account: "01234562087",
          amount: "₹5,200",
          logo: "🛡️",
        },
      ],
    },
  ],
};

// Colors for the pie chart
const COLORS = ["#f87171", "#4ade80", "#fbbf24"];

const Assets = () => {
  const { user, chartData, assets } = jsonData;

  // Pie chart data
  const pieData = [
    { name: "Expense", value: chartData.amounts[0] },
    { name: "Income", value: chartData.amounts[1] },
    { name: "Total", value: chartData.amounts[2] },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header */}
      <header className="bg-white shadow-md p-4 rounded-lg mb-4">
        <h1 className="text-lg font-bold">Asset Allocation</h1>
        <p className="text-sm text-gray-600">Last 30 days</p>
      </header>

      {/* Chart Section */}
      <div className="bg-white shadow-md p-4 rounded-lg mb-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-600">
            Expense: <span className="text-red-500">₹1.5 Lac</span>
          </p>
          <p className="text-sm text-gray-600">
            Income: <span className="text-green-500">₹3 Lac</span>
          </p>
          <p className="text-sm text-gray-600">
            Total: <span className="text-yellow-500">₹1.5 Lac</span>
          </p>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-around text-sm mt-4">
          <span className="text-red-500">• Banks</span>
          <span className="text-blue-500">• Investments</span>
          <span className="text-green-500">• Insurance</span>
        </div>
      </div>

      {/* Assets Section */}
      {assets.map((asset, index) => (
        <div key={index} className="bg-white shadow-md p-4 rounded-lg mb-4">
          <h2 className="text-lg font-bold mb-2">{asset.category}</h2>
          <p className="text-sm text-gray-600 mb-4">{asset.totalAmount}</p>
          {asset.details.map((detail, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between mb-2 border-b pb-2"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{detail.logo}</span>
                <div>
                  <p className="text-sm font-bold">{detail.title}</p>
                  <p className="text-xs text-gray-600">{detail.account}</p>
                </div>
              </div>
              <p className="text-sm font-bold">{detail.amount}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Assets;
