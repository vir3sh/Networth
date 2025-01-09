import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartSection = ({ chartData }) => {
  // Transform data into a format suitable for Recharts
  const formattedData = chartData.timePeriod.map((year, index) => ({
    year,
    amount: chartData.amounts[index],
  }));

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Net Worth Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#8884d8"
            fillOpacity={1}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSection;
