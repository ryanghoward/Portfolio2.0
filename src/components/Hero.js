import { Link } from "react-scroll";
import heroImg from "../assets/me.jpg";

const Hero = () => {
  return (
    <section className='bg-gradient-to-r from-cyan-500 to-violet-900 bg-fixed h-[85vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 '>
      <div className='container h-full mx-auto'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex flex-col items-center flex-1 lg:items-start'>
            <p className='text-2xl text-tertiary font-medium text-md mb-[22px]'>
              Ryan <span className='font-light text-paragraph'>G.</span> Howard
            </p>
            <h1 className='text-white text-center text-4xl leading-[44px] sm:text-center md:text-5xl md:leading-tight md:text-left lg:text-5xl lg:leading-[1.2] font-normal font-body md:tracking-[2px]'>
              I design & create <br /> websites and apps.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
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
              className='flex items-center justify-between transition-all duration-300 border cursor-pointer rounded-xl text-white hover:from-pink-500 hover:to-yellow-500 hover:text-primary hover:border-primary md:btn-lg btn btn-md'
            >
              Let's create something together!
            </Link>
          </div>
          <div className='relative items-center justify-center flex-1 hidden h-full lg:flex'>
            <img
              className='h-[50vh] rounded-full z-10 drop-shadow-4xl'
              src={heroImg}
              alt=''
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
