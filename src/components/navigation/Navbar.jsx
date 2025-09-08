import React, { useContext, useRef } from "react";
import { NavbarColorContext, NavbarContext } from "../../context/NavContext";

const Navbar = () => {
  const navBrownRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const [navColor, setNavColor] = useContext(NavbarColorContext);

  const handleNavClick = () => {
    console.log("Nav clicked, current state:", navOpen); // Debug log
    setNavOpen(true);
  };

  const handleMouseEnter = () => {
    if (navBrownRef.current) {
      navBrownRef.current.style.height = "100%";
    }
  };

  const handleMouseLeave = () => {
    if (navBrownRef.current) {
      navBrownRef.current.style.height = "0%";
    }
  };

  return (
    <div className="z-[60] flex fixed top-0 w-full items-start justify-between pointer-events-none">
      {/* Logo section */}
      <div className="lg:p-1 p-2 pointer-events-auto">
        <div className="lg:w-36 w-24">
          <img
            src="/cozycuplogo.svg"
            alt="Cozy Cup Logo"
            width="150"
            height="50"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Hamburger menu button */}
      <div
        onClick={handleNavClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="lg:h-16 h-10 bg-black relative lg:w-[16vw] w-48 cursor-pointer pointer-events-auto hover:bg-opacity-90 transition-all duration-300"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleNavClick();
          }
        }}
        aria-label="Open navigation menu"
      >
        {/* Brown hover overlay */}
        <div
          ref={navBrownRef}
          className="bg-[#C3732A] transition-all duration-300 ease-out absolute top-0 h-0 w-full"
        ></div>

        {/* Hamburger lines */}
        <div className="relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5 z-10">
          <div className="lg:w-16 w-12 h-0.5 bg-white transition-all duration-300"></div>
          <div className="lg:w-10 w-6 h-0.5 bg-white transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
