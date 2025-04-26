import React, { useState } from "react";
import Navlinks from "./Navlinks";
import Navbutton from "./Navbutton";
import Navlogo from "./Navlogo";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="max-w-[1280px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1080px] mx-auto bg-blck items-center p-6 rounded-full border-[0.5px] border-ornge">
        <Navlogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <Navlinks />
        </div>
        <Navbutton />
      </div>
      <div className="lg:hidden sm: block p-6 bg-black items-center justify-center border-[0.5px] border-ornge rounded-full">
        <button
          className="text-white p-3 border border-ornge rounded-full"
          onClick={() => toggleMenu()}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default NavbarMain;
