import React from "react";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section
      id='portfolio'
      className='bg-gradient-to-l from-cyan-500 to-violet-900 section min-h-[1400px]'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center mb-[-45px]'>
          <h2 className='section-title text-tertiary font-light before:content-portfolio relative before:absolute before:opacity-80 before:-top-[2rem] before:-left-[83%] before:hidden before:lg:block'>
            My latest work
          </h2>
          {/* <p className='text-2xl subtitle'>Checkout some of my latest work</p> */}
          <hr className='mb-8 opacity-5' />
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
