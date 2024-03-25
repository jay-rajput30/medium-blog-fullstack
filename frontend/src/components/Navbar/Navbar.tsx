import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <h1>MEDIUM</h1>
      <p>draft in kirags</p>
      <p>saved</p>
      <button>publish</button>
      <div></div>
      <div></div>
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">JR</span>
      </div>
    </nav>
  );
};

export default Navbar;
