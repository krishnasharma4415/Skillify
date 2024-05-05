import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className=" bg-[#0D172A]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <a href="" className="flex items-center space-x-3 ">
          <img src="./images/logo.png" className="h-8" alt="" />
          <span className=" text-2xl font-bold whitespace-nowrap dark:text-white">Skillify</span>
        </a>
      </div>
    </nav>
  );
};

export default Header;