import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Transaction = ({ transactions, chartData }) => {
  // Prepare data for Pie Chart
  const pieData = {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.data,
        backgroundColor: chartData.colors,
        hoverOffset: 4,
        borderWidth: 2, // Add a border to enhance the 3D effect
        borderColor: "#fff", // White border for separation
        offset: 5, // Offset for slight "lift" of the segments
      },
    ],
  };

  // Chart options for a better 3D-like effect
  const options = {
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 20,
        },
      },
      tooltip: {
        backgroundColor: "#333",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#444",
        borderWidth: 1,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-4">
      {/* Pie Chart */}

      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-600">
            Expense:{" "}
            <span className="text-red-500">{chartData.expenses[0]} lac</span>
          </p>
          <p className="text-sm text-gray-600">
            Income:{" "}
            <span className="text-green-500">{chartData.expenses[1]} lac</span>
          </p>
          <p className="text-sm text-gray-600">
            Total:{" "}
            <span className="text-yellow-500">{chartData.expenses[2]} lac</span>
          </p>
        </div>

        <div style={{ height: "300px", width: "100%" }}>
          <Pie data={pieData} options={options} />
        </div>
      </div>

      {/* Transactions Section */}
      <h1 className="text-xl font-bold mb-4">Transactions</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <h2 className="text-lg font-semibold">{transaction.title}</h2>
              <p className="text-gray-500">{transaction.card}</p>
              <p className="text-sm text-gray-400">
                {new Date(transaction.date).toLocaleString()}
              </p>
            </div>
            <div>
              <p
                className={`text-lg font-bold ${
                  transaction.type === "income"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {transaction.amount}
              </p>
              <p className="text-sm text-gray-400 capitalize">
                {transaction.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transaction;
