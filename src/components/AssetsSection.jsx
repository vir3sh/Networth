import React from "react";
import { Link } from "react-router-dom";

const AssetsSection = ({ assets }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Assets</h2>
        <Link to={"/assets"} className="text-blue-600">
          See All
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {assets.map((asset, index) =>
          asset.details.map((detail, i) => (
            <div
              key={`${index}-${i}`}
              className="bg-gray-100 p-4 rounded-lg flex items-center justify-between"
            >
              <span className="text-2xl bg-gray-100">{detail.logo}</span>
              <div>
                <p className="text-sm bg-gray-100 text-gray-600">
                  {detail.title}
                </p>
                <p className="font-bold bg-gray-100">{detail.amount}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AssetsSection;
