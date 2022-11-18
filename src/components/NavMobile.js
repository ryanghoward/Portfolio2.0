import Socials from "./Socials";
import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";
import { navigation } from "../data";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='relative'>
      <div onClick={handleClick} className='cursor-pointer text-paragraph'>
        <MenuAlt3Icon className='w-8 h-8' />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? "visible" : "hidden"}
        className='fixed top-0 right-0 w-4 h-4 rounded-full bg-[#99D9D9]'
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={handleClick}
          className='absolute cursor-pointer top-8 right-8'
        >
          <XIcon className='w-8 h-8' />
        </div>
        {navigation.map((item, idx) => {
          return (
            <li key={idx} className='mb-16'>
              <Link
                to={item.href}
                smooth={true}
                duration={1000}
                offset={-70}
                className='text-4xl capitalize cursor-pointer text-primary'
                onClick={handleClick}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <Socials />
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
