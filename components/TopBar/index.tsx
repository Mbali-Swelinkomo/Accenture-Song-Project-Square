import React from "react";

const Navbar = () => {
  return (
    <nav className="px-15 bg-globalBg text-white p-6 flex justify-between lg:pl-[90px] font-inter font-bold items-center top-0 left-0 w-full z-10">
      <img src="/images/logo.svg" alt="Brand Logo" className="h-10 w-auto" />
      <ul className="hidden md:flex space-x-6">
        <li className="cursor-pointer hover:underline">Services</li>
        <li className="cursor-pointer hover:underline">Industries</li>
        <li className="cursor-pointer hover:underline">Cases</li>
        <li className="cursor-pointer hover:underline">Contact</li>
      </ul>
      <button className="bg-white text-globalBg  px-4 py-2 rounded-lg">Let's Talk</button>
    </nav>
  );
};

export default Navbar;
