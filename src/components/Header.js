import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Nav from "./Nav";
import Social from "./Social";

const Header = () => {
  const [background, setBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBackground(true) : setBackground(false);
    });
  });

  return (
    <div
      className={`${
        background ? "bg-primary h-24 shadow-md" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-20 transition-all duration-300`}
    >
      <div className='container flex items-center justify-between h-full mx-auto'>
        <Link
          to='home'
          smooth={true}
          duration={1100}
          className='text-xl font-semibold tracking-widest transition-all duration-300 cursor-pointer text-accent hover:text-paragraph'
        >
          RGH
        </Link>
        <div className='hidden lg:block'>
          <Nav />
        </div>
        <div className='hidden lg:block'>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Header;
