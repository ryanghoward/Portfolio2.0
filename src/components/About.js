import { Link } from "react-scroll";
import aboutImg from "../assets/code7.jpg";

const About = () => {
  return (
    <section
      className='h-[73vh] sm:h-[75.5vh] section bg-gradient-to-l from-cyan-500 to-violet-900'
      id='about'
    >
      <div className='container flex items-center justify-center mx-auto'>
        <div className='relative flex flex-col items-center gap-24 lg:items-center xl:flex-row'>
          {/* <div className='absolute h-[80%] left-[-2%] rounded-2xl bottom-[5%] w-[566px] bg-tertiary opacity-30 hidden xl:block'></div> */}
          <img
            className='object-cover h-full max-w-[566px] hidden xl:flex lg:mx-0 rounded-2xl z-10 drop-shadow-4xl'
            src={aboutImg}
            alt=''
            loading='lazy'
          />
          <div className='flex flex-col items-center text-center h-[31em] justify-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl text-tertiary lg:text-4xl font-medium lg:font-light mb-3 before:content-about relative before:absolute before:opacity-80 before:-top-[2.3rem] before:-left-[1rem] before:hidden before:lg:block'>
                <span className='opacity-80'>About Me</span>
              </h2>
              <p className='mb-4 text-tertiary'>Full-Stack Web Developer</p>
              <hr className='mb-8 opacity-50' />
              <p className='xs:w-[90vw] sm:w-auto mb-8'>
                Welcome to my website! Thanks for stopping by. Over the past
                year I chose to make a career change and dove head first into
                the world of Web Development and Coding. I completed the Full
                Stack Web Development boot camp at Bloom Institute of Technology
                and loved every minute of it. This site is the culmination of my
                work up to this point. Enjoy!
              </p>
            </div>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              duration={1100}
              offset={-70}
              className='rounded-xl transition-all duration-300 border btn btn-md border-accent-brown hover:bg-accent-hover hover:text-primary hover:font-semibold'
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
