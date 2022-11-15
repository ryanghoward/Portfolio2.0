import React from "react";
import portfolio from "../../assets/text/portfolio.svg";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div id='portfolio' className='section min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center mb-[-45px]'>
          <h2 className='section-title text-accent-hover font-light before:content-portfolio relative before:absolute before:opacity-80 before:-top-[2rem] before:-left-[83%] before:hidden before:lg:block'>
            My latest work
          </h2>
          <p className='text-2xl subtitle'>
            Check out some of my most recent projects
          </p>
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default Portfolio;
