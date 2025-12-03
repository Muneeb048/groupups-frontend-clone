import React from "react";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#030d13] sticky top-0 z-50 w-full px-8 py-5 flex items-center justify-between border-b border-[#0245444d]/30">
      <h1 className="text-3xl font-bold text-white">
        group<span className=" text-[#4aa6a4]">ups</span>
      </h1>
    </nav>
  );
};
export default Navbar;
