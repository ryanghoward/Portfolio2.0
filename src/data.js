//  icons
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

// navigation
export const navigation = [
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

// projects
export const projectsNav = [
  {
    name: "featured",
  },
  {
    name: "web development",
  },
  {
    name: "mobile",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail size={35} />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Let's create something together!",
  },
  {
    icon: <FiMapPin size={35} />,
    title: "Current Location",
    subtitle: "Cleveland, OH",
    description: "Serving clients worldwide.",
  },
];
