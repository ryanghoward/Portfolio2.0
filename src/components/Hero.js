import React from "react";
import { Link } from "react-scroll";
// import myFace from "../assets/Ryan.PNG";
import me from "../assets/me.jpg";

const Hero = () => {
  return (
    <div
      className='h-[100vh] bg-gradient-to-r from-cyan-500 to-violet-900 flex items-center py-32 lg:py-0'
      id='home'
    >
      <div className='container h-full mx-auto'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex flex-col items-center flex-1 lg:items-start'>
            <p className='text-2xl text-white font-medium text-md mb-[22px]'>
              Hello
              <span className='font-light'>, I'm Ryan!</span>
            </p>
            <h1 className='text-white text-center text-4xl leading-[44px] sm:text-center md:text-5xl md:leading-tight md:text-left lg:text-5xl lg:leading-[1.2] font-normal font-body md:tracking-[2px]'>
              I design and create <br /> websites and apps.
            </h1>
            <p className='text-white pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              I am a full-stack developer (specializing in front-end
              development) who creates websites, applications, and games for a
              range of different customers.
            </p>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              duration={1100}
              offset={-70}
              className='flex items-center justify-between transition-all duration-300 border cursor-pointer text-paragraph'
            >
              Let's build something together!
            </Link>
          </div>
          <div className='relative items-center justify-center flex-1 hidden h-full lg:flex'>
            <img
              className='h-[55%] rounded-full z-10'
              src={me}
              alt='My Ugly Mug'
              // loading='lazy'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
