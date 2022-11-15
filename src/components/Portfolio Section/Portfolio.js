import React from "react";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div id='portfolio' className='w-full h-[100vh]'>
      <div className='container mx-auto mt-[7rem]'>
        <div className='flex flex-col items-center text-center mb-[-45px]'>
          <h2 className='section-title text-accent-hover font-light before:content-portfolio relative before:absolute before:opacity-80 before:-top-[3rem] before:-left-[83%] before:hidden before:lg:block mb-10'>
            Check out some of my latest work
          </h2>
          {/* <p className='text-2xl subtitle mt-5'>
            Check out some of my most recent projects
          </p> */}
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default Portfolio;
