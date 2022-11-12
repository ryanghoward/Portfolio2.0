import React from "react";
import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";

const socialIcons = [
  {
    icon: <SlSocialLinkedin size={30} />,
    href: "https://www.linkedin.com/in/ryangeorgehoward/",
  },
  {
    icon: <SlSocialGithub size={30} />,
    href: "https://github.com/ryanghoward",
  },
];

const Social = () => {
  return (
    <ul className='flex space-x-6'>
      {socialIcons.map((item, index) => {
        return (
          <li
            className='flex items-center justify-center transition-all duration-300 text-paragraph hover:text-paragraph'
            key={index}
          >
            <a
              className='text-base'
              href={item.href}
              rel='noreferrer'
              target='_blank'
            >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
