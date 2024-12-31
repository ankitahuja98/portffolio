import React from "react";
import "./Projects.css";
import { projects } from "../../data/constants";
import useWindowDimensions from "../../utils/CurrentScreenSize";
import { motion } from "framer-motion";
import { MotionContainer } from "../../utils/MotionContainer";

const Projects = () => {
  const windowDimension = useWindowDimensions();
  const { width } = windowDimension;
  return (
    <div className="container ProjectContainer" id="projects">
      <motion.div
        className="Project_Heading"
        variants={MotionContainer("left", 0.3, 30, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="mb-1">MY WORK</p>
        <h1 className="mb-3">Projects</h1>
        <p>
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </motion.div>

      <div className="row cardrow">
        {projects.map((value, index) => {
          return (
            <motion.div
              className="col-12 col-md-6 col-lg-4 cardCol"
              key={value.id}
              variants={MotionContainer(
                "up",
                width > 768 ? value.delay : 0.3,
                0,
                30
              )}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="Project_Card">
                <div className="Project_Card_img">
                  <img src={value.image} alt={value.alt} />
                </div>

                <div className="Project_Card_Body">
                  <h4>{value.title}</h4>
                  {value.tags && value.tags.length > 0 && (
                    <div>
                      {value.tags.map((tag, ind) => (
                        <button className="tags" key={ind}>
                          {tag}
                        </button>
                      ))}
                    </div>
                  )}
                  <p className="Project_Card_Body_Desc mt-2">
                    {value.description}
                  </p>
                </div>

                {/* Project card Buttons Started */}
                <div className="row">
                  <div className="col-6">
                    <a href={value.github} target="_blank" rel="noreferrer">
                      <button
                        type="button"
                        className="btn btn-success card_btn"
                        fdprocessedid="urotn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                        </svg>
                        &nbsp;&nbsp;Github Repo
                      </button>
                    </a>
                  </div>

                  <div className="col-6">
                    <a href={value.webapp} target="_blank" rel="noreferrer">
                      <button className="btn btn-primary card_btn">
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        &nbsp;&nbsp;Live Demo
                      </button>
                    </a>
                  </div>
                </div>
                {/* Project card Buttons ended */}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
