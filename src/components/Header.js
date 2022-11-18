import { useState, useEffect } from "react";
import loadable from "@loadable/component";
import { Link } from "react-scroll";

const Navbar = loadable(() => import("./Navbar"));
const Socials = loadable(() => import("./Socials"));
const NavMobile = loadable(() => import("./NavMobile"));

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
          className='text-xl font-semibold tracking-widest transition-all duration-300 cursor-pointer text-accent hover:text-paragraph'
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
