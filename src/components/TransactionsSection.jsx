import React from "react";
import { Link } from "react-router-dom";

const TransactionsSection = ({ transactions }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Recent Transactions</h2>
        <Link to={"/transactions"} className="text-blue-600">
          See All
        </Link>
      </div>
      <div>
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-2 text-sm"
          >
            <div>
              <p className="font-medium">{transaction.title}</p>
              <p className="text-gray-500">Visa Card • 0976</p>
            </div>
            <p
              className={`font-bold ${
                transaction.type === "income"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsSection;
