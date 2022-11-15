import React from "react";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      id='portfolio'
      className='flex flex-col items-center p-4 text-center duration-300 rounded-md cursor-pointer hover:scale-110 transition-all'
    >
      <a href={item.link} rel='noreferrer' target='_blank'>
        <div>
          <img
            className='w-full h-full max-h-[420px] rounded-md max-w-[800px]'
            src={item.image}
            alt='/'
          />
        </div>
        <h3 className='mb-3 text-2xl font-semibold underline capitalize'>
          {item.name}
        </h3>
        <p className='max-w-full text-lg font-semibold text-center'>
          {item.desc}
        </p>
      </a>
    </div>
  );
};

export default Project;
