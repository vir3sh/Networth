import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          VS
        </div>
        <h1 className="ml-3 text-xl font-bold">Networth</h1>
      </div>
      <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
        <img src="/icons/settings.svg" alt="Settings" className="w-6 h-6" />
      </button>
    </header>
  );
};

export default Header;
