import React from "react";
import { Link } from "react-scroll";
import aboutImg from "../assets/code7.jpg";
import { BsArrowRight } from "react-icons/bs";
import aboutText from "../assets/text/about.svg";

const About = () => {
  return (
    <div className='h-[100vh] section' id='about'>
      <div className='container flex items-center justify-center mx-auto h-full'>
        <div className='relative flex flex-col items-centergap-24 lg:items-center xl:flex-row'>
          <img
            className='object-cover h-full max-w-[566px] hidden xl:flex lg:mx-0 rounded-2xl drop-shadow-2xl z-10'
            src={aboutImg}
            alt='About'
            loading='lazy'
          />
          <div className='flex flex-col items-center text-center ml-10 h-[31em] justify-center lg:items-start lg:text-left'>
            <div className='flex flex-col text-gray-700'>
              <h2 className='text-3xl text-accent-hover lg:text-4xl font-medium lg:font-light mb-3 before:content-about relative before:absolute before:opacity-80 before:-top-[2.3rem] before:-left-[1rem] before:hidden before:lg:block'>
                <span className='opacity-80'>Ryan G. Howard</span>
              </h2>
              <p className='mb-4'>Full-Stack Web Developer</p>
              <hr className='mb-8' />
              <p className='xs:w-[90vw] sm:w-auto mb-8'>
                Welcome to my website! Thanks for stopping by. Over the past
                year I chose to make a career change and dove head first into
                the world of Web Development and Coding. I completed the Full
                Stack Web Development boot camp at Bloom Institute of Technology
                and loved every minute of it. This site is the culmination of my
                work up to this point. Enjoy!
              </p>
              <Link to='projects'>
                <button>
                  See More <BsArrowRight size={25} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
