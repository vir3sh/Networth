import React from "react";
import { Link } from "react-router-dom";
import robo from "../assets/robo.png";
const Header = () => {
  return (
    <header className="bg-white shadow-md p-4  flex justify-between items-center rounded-bl-[25px] rounded-br-[25px]">
      <div className="flex items-center">
        <Link
          to={"/"}
          className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold"
        >
          S
        </Link>
        <Link to={"/"} className="ml-3 text-xl font-bold">
          Networth
        </Link>
      </div>
      <Link
        to={"/"}
        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
      >
        <img
          src={robo}
          alt="Settings"
          className="  bg-gray-200 w-6 h-6 rounded-full"
        />
      </Link>
    </header>
  );
};

export default Header;
