import React from "react";

const Footer = () => {
  return (
    <footer className="px-2 py-3 sm:py-4 sm:px-6 flex justify-between items-center bg-slate-100 ">
      <p className="text-sm sm:text-2xl font-bold bg-gradient-to-r from-blue-700 to-[#339AF0] inline-block text-transparent bg-clip-text">
        Smart Save
      </p>
      <p className="text-[0.45rem] sm:text-xs">
        Copyright © 2023 Smart Save. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
