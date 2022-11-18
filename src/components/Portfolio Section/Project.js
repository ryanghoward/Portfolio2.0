import React from "react";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className='flex flex-col items-center p-4 text-center duration-300 rounded-md cursor-pointer hover:scale-110 transition-all'
    >
      <a href={item.link} rel='noreferrer' target='_blank'>
        <div>
          <img
            className='w-full h-full max-h-[420px] rounded-md max-w-[800px]'
            src={item.image}
            alt={item.title}
          />
        </div>
        <h3 className='mb-3 text-2xl text-tertiary font-semibold hover:underline capitalize'>
          {item.name}
        </h3>
        <p className='max-w-full text-lg font-semibold text-center'>
          {item.desc}
        </p>
        <a
          className='mr-4 hover:underline'
          href={item.siteUrl}
          target='_blank'
          rel='noreferrer'
        >
          View Site
        </a>
        <a
          className='hover:underline'
          href={item.codeUrl}
          target='_blank'
          rel='noreferrer'
        >
          View Code
        </a>
      </a>
    </div>
  );
};

export default Project;
