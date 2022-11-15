import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";

import skills from "./SkillsData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 300 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    // <section className='skill'>
    <section className='ml-12 flex items-center justify-center h-[100%]'>
      <Container>
        <Row>
          <Col>
            {/* <div className='skill-box'> */}
            <div className='bg-[#555] rounded-[3rem] text-center py-4 px-3'>
              <h2 className='text-5xl text-white font-bold mt-4'>Skills</h2>
              <p className='text-xl text-white'>
                These are the technologies I work with
              </p>
              <hr className='mt-4 mb-4' />
              <Carousel
                // className='skill-slider'
                className='mb-0 mt-8 mx-auto w-full h-full flex items-center justify-center'
                swipeable={false}
                draggable={false}
                arrows={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={300}
                customTransition='all 1000ms'
                transitionDuration={1000}
              >
                {skills.map((skill) => (
                  <div key={skill.id}>
                    {/* className-'item' -- above original */}
                    <img
                      className='h-[10rem] mx-auto object-contain flex items-center'
                      src={skill.img}
                      alt={skill.name}
                    />
                    <h5 className='mt-4 text-xl text-white text-center'>
                      {skill.name}
                    </h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
