import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const ChartSection = ({ chartData }) => {
  // Transform data into a format suitable for Recharts
  const formattedData = chartData.timePeriod.map((year, index) => ({
    year,
    amount: chartData.amounts[index],
  }));

  return (
    <div className="bg-white shadow-md mb-5 p-4 rounded-lg">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={formattedData}>
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="year"
            tick={{ fontSize: 12 }}
            axisLine={{ stroke: "#ddd" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            axisLine={{ stroke: "#ddd" }}
            tickLine={false}
            tickFormatter={(value) =>
              new Intl.NumberFormat("en-IN").format(value)
            }
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Tooltip
            formatter={(value) =>
              `₹${new Intl.NumberFormat("en-IN").format(value)}`
            }
            labelFormatter={(label) => `Year: ${label}`}
          />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#4f46e5"
            fill="url(#colorAmount)"
            strokeWidth={2}
            dot={{ stroke: "#4f46e5", strokeWidth: 3, r: 5 }}
            activeDot={{ r: 7 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSection;
