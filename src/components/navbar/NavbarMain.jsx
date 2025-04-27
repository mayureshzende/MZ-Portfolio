import { useState, useRef, useEffect } from "react";
import Navlinks from "./Navlinks";
import Navbutton from "./Navbutton";
import Navlogo from "./Navlogo";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, [menuOpen]);
  return (
    <div
      className="max-w-[1280px] mx-auto px-1 w-full fixed backdrop-blur-2xl left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-0 rounded-full"
      ref={menuRef}
    >
      {/* bg-blck */}
      <div
        className="flex justify-between w-full max-w-[1080px] mx-auto 
       items-center pt-2 pb-2 rounded-full  "
        //  border-[0.1px] border-ornge"
      >
        <Navlogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block m-0`}>
          <Navlinks />
        </div>
        <Navbutton />
      </div>
      {/* bg-black  */}
      <div
        className="lg:hidden sm: block p-7
      items-center justify-center rounded-full"
      >
        <button
          className="text-white p-5 border border-ornge rounded-full"
          onClick={() => toggleMenu()}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default NavbarMain;
