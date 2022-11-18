import { socialIcons } from "./Socials";

const Footer = () => {
  return (
    <footer className='h-[8rem] bg-accent-hover'>
      <div className='container flex items-center justify-center h-full mx-auto'>
        <div className='flex flex-col items-center w-full h-full justify-evenly md:justify-between md:flex-row'>
          <div className='flex items-center justify-center space-x-6'>
            {socialIcons.map((item, index) => {
              const { href, icon } = item;
              return (
                <div
                  key={index}
                  className='text-base transition-all duration-300 text-primary hover:text-white'
                >
                  <a href={href} rel='noreferrer' target='_blank'>
                    {icon}
                  </a>
                </div>
              );
            })}
          </div>
          <div className='flex items-center justify-center'>
            <p className='font-bold tracking-widest sm:text-md lg:text-xl text-primary'>
              RGH{" "}
              <span className='font-medium sm:text-md lg:text-3xl text-paragraph'>
                ||
              </span>{" "}
              WEBDEV
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <p className='flex items-end font-bold sm:text-md lg:text-xl text-primary'>
              <span className='mr-2 text-sm'>&copy;</span> 2022 Ryan G. Howard
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
