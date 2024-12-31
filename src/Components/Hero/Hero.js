import React from "react";
import "./Hero.css";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import MainPic from "../../Images/Main.png";
import ImageLoading from "../ImageLoading/ImageLoading";
import useWindowDimensions from "../../utils/CurrentScreenSize";
import { motion } from "framer-motion";
import { MotionContainer } from "../../utils/MotionContainer";

const Hero = () => {
  const hash = "LMMGwj%c.jV?_ARRa+kD4}N10qxs";
  const windowDimension = useWindowDimensions();
  const { width } = windowDimension;
  return (
    <div id="HeroSection">
      <div className="HeroContainer ">
        <div className="container d-flex justify-content-between">
          <div className="row">
            {/* Hero Section Left Started */}
            <div className="HeroLeft col-12 col-md-12 col-lg-6 order-1 order-lg-0">
              <div className="HeroLeftContainer">
                <motion.div
                  variants={MotionContainer("right", 0.3, 30, 0)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="Title"
                >
                  Hi, I am {Bio.name}
                </motion.div>
                <motion.div
                  variants={MotionContainer("right", 0.5, 30, 0)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="Textloop"
                >
                  I am a
                  <span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </motion.div>
                <motion.p
                  variants={MotionContainer("right", 0.6, 30, 0)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="description"
                >
                  {Bio.description}
                </motion.p>

                {/* Resume button started */}
                <motion.div
                  variants={MotionContainer("", width > 768 ? 0.7 : "", 30, 0)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="btn btn-outline-primary ResumeButton my-3"
                >
                  <a href={Bio.resume} rel="noreferrer" target="_blank">
                    <divs className="ResumeButtondiv">Check Resume</divs>
                  </a>
                </motion.div>
                {/* Resume button Ended */}

                <div className="row w-100 d-flex justify-content-center align-items-center mt-3">
                  {/* Github button started */}
                  <div className="col-06 GitProfileBtn">
                    <div className="BtnContainer githubcontainer">
                      <a
                        className="GithubBtnA"
                        href={Bio.github}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <p className="GithubButton">Github Profile</p>
                      </a>
                    </div>
                  </div>
                  {/* Github button ended */}

                  {/* Linkedin button started */}
                  <div className="col-06 LinkProfileBtn">
                    <div className="BtnContainer Linkedincontainer">
                      <a
                        className="LinkedinBtnA"
                        href={Bio.linkedin}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <p className="LinkedinButton">Linkedin Profile</p>
                      </a>
                    </div>
                  </div>
                  {/*Linkedin button ended */}
                </div>
              </div>
            </div>
            {/* Hero Section Left Ended */}

            {/* Hero Section Right Started */}
            <motion.div
              variants={MotionContainer("up", 0.5, 0, 30)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="HeroRight col-6 col-md-6 col-lg-6 order-0 order-lg-1"
            >
              <div className="HeroRightContainer d-flex justify-content-center align-items-center">
                <ImageLoading src={MainPic} hash={hash} />
              </div>
            </motion.div>
            {/* Hero Section Right Ended */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
