import React from "react";
import { Link } from "react-scroll";

const navItems = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navItems.map((item, index) => {
          return (
            <li
              className='text-lg uppercase cursor-pointer text-paragraph hover:text-accent'
              key={index}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
