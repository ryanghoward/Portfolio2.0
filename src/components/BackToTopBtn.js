import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { ChevronUpIcon } from "@heroicons/react/outline";

const BackTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 810 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className='fixed flex items-center justify-center w-12 h-12 transition-all rounded-full cursor-pointer bg-primary hover:bg-white hover:text-primary hover:shadow-lg text-paragraph right-12 bottom-12'
      >
        <ChevronUpIcon className='w-10 h-10' />
      </button>
    )
  );
};

export default BackTopBtn;
