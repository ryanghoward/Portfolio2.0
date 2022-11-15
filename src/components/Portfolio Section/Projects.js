import React, { useState, useEffect } from "react";

import WMP from "../../assets/projects/WaterMyPlants.PNG";
import PP from "../../assets/projects/PotluckPlanner.PNG";
import UDD from "../../assets/projects/UnderdogDevs.PNG";
import VHCL from "../../assets/projects/VHCL.PNG";
import FF from "../../assets/projects/Fakeflix.PNG";
import EX from "../../assets/projects/Explore.PNG";
import Project from "./Project";

const projectsNav = [
  {
    name: "featured",
  },
  {
    name: "web development",
  },
  {
    name: "mobile",
  },
];

const Projects = () => {
  const projectsData = [
    {
      id: "1",
      name: "Fakeflix",
      description: "Netflix Clone",
      image: FF,
      siteUrl: "https://fakeflix-be7a7.web.app/",
      codeUrl: "https://github.com/ryanghoward/Fakeflix",
    },
    {
      id: "2",
      name: "VHCL",
      description: "Turo Clone",
      image: VHCL,
      siteUrl: "https://ryanghoward.github.io/VHCL/",
      codeUrl: "https://github.com/ryanghoward/VHCL",
    },
    {
      id: "3",
      name: "Explore",
      description: "Travel Site Landing Page",
      image: EX,
      siteUrl: "https://ryanghoward.github.io/travel-site/",
      codeUrl: "https://github.com/ryanghoward/travel-site",
    },
    {
      id: "4",
      name: "Underdog Devs",
      description: "Underdog Devs Website",
      image: UDD,
      siteUrl: "https://www.underdogdevs.org/",
      codeUrl: "https://github.com/BloomTech-Labs/underdog-devs-fe-a",
    },
    {
      id: "5",
      name: "Potluck Planner",
      description: "Potluck Organizing & Planning App",
      image: PP,
      siteUrl: "https://potluck1-front-end.vercel.app/",
      codeUrl: "https://github.com/Potluck-Planner-A",
    },
    {
      id: "6",
      name: "I Wet My Plants",
      description: "Plant Watering Schedule App",
      image: WMP,
      siteUrl: "https://water-my-plants-9-build-week.vercel.app/",
      codeUrl: "https://github.com/Build-Week-Water-My-Plants-8/front-end",
    },
  ];

  const [item, setItem] = useState({ name: "featured" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "featured") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      <div className='max-w-xl mx-auto mb-12'>
        <ul className='flex flex-col items-center text-paragraph sm:flex-row justify-evenly'>
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8'>
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Projects;
