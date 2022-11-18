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
    <section
      className='bg-gradient-to-l from-cyan-500 to-violet-900 flex items-center justify-center h-[100vh]'
      id='skills'
    >
      <Container>
        <Row>
          <Col>
            <div className='bg-gradient-to-r from-black via-gray-700 to-gray-500 h-[50vh] rounded-[3rem] text-center py-4 px-3 drop-shadow-4xl'>
              <h2 className='text-6xl mx-auto font-bold mt-4 bg-gradient-to-r from-yellow-500 to-red-600 inline-block text-transparent bg-clip-text'>
                Skills
              </h2>
              <p className='text-xl text-tertiary mt-4 mb-4'>
                These are the technologies I work with
              </p>
              {/* <hr className='mt-4 mb-4 mx-auto w-[45%]' /> */}
              <Carousel
                className='mx-auto mb-10 mt-20'
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
                  <div key={skill.id} className='h-full'>
                    <img
                      className='h-[10rem] w-[10rem] mx-auto object-contain flex items-center'
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
