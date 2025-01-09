import React from "react";

const Transaction = ({ transactions }) => {
  return (
    <div className="p-4">
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
