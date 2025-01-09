import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Assets = ({ data, chartData }) => {
  const { assets } = data;

  // Prepare data for Doughnut Chart
  const doughnutData = {
    labels: assets.map((asset) => asset.category),
    datasets: [
      {
        data: assets.map(
          (asset) => parseFloat(asset.totalAmount.replace(/[₹,]/g, "")) // Convert "₹60,000" to 60000
        ),
        backgroundColor: [
          "#4CAF50",
          "#2196F3",
          "#FFC107",
          "#E91E63",
          "#9C27B0",
        ],
        borderWidth: 2,
        borderColor: "#fff",
        hoverOffset: 6,
      },
    ],
  };

  // Chart options
  const doughnutOptions = {
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderWidth: 1,
        titleColor: "#000",
        bodyColor: "#000",
        cornerRadius: 5,
        padding: 10,
      },
      legend: {
        display: false,
      },
    },
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-4">
      {/* Doughnut Chart Section */}
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
        <div style={{ height: "300px", position: "relative" }}>
          <Doughnut data={doughnutData} options={doughnutOptions} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <p className="text-xl font-bold">Assets</p>
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-4 overflow-auto">
          {assets.map((asset, index) => (
            <div key={index} className="flex items-center text-sm">
              <span
                style={{
                  backgroundColor:
                    doughnutData.datasets[0].backgroundColor[index],
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  marginRight: "8px",
                }}
              ></span>
              {asset.category}
            </div>
          ))}
        </div>
      </div>

      {/* Assets Overview Section */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">Assets Details</h2>
        {assets.map((asset, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {asset.category} - Total: {asset.totalAmount}
            </h3>
            <div className="border rounded-lg p-4 bg-gray-50">
              {asset.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border-b py-2"
                >
                  <div>
                    <h4 className="text-md font-semibold">
                      <img
                        className="w-[70px] h-[70px]"
                        src={detail.logo}
                        alt=""
                      />{" "}
                      {detail.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      Account: {detail.account}
                    </p>
                  </div>
                  <p className="text-lg font-bold text-blue-500">
                    {detail.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assets;
