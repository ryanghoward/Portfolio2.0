import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import Navbar from "./Navbar";
import Socials from "./Socials";
import NavMobile from "./NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-primary h-24 shadow-md" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-20 transition-all duration-300`}
    >
      <div className='container flex items-center justify-between h-full mx-auto'>
        <Link
          to='home'
          smooth={true}
          duration={1100}
          className='text-xl font-semibold tracking-widest transition-all duration-300 cursor-pointer text-tertiary hover:text-white'
        >
          RGH
        </Link>
        <div className='hidden lg:block'>
          <Navbar />
        </div>
        <div className='hidden lg:block'>
          <Socials />
        </div>
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
