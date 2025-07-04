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
    <>
      <nav
        className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2"
        ref={menuRef}
      >
        <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-dbrw items-center pt-2 pb-2  p-6 rounded-r-full rounded-l-full border-ornge border-[0.5px] ">
          <Navlogo />
          <div
            className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block m-0`}
          >
            <Navlinks />
          </div>
          <Navbutton />
        </div>
        {/* bg-black  */}
        <div className="lg:hidden sm:block bg-dbrw items-center justify-center rounded-full p-4 border-[0.5px] border-ornge">
          <button
            className="text-white text-2xl p-2 border border-ornge rounded-full"
            onClick={() => toggleMenu()}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarMain;
