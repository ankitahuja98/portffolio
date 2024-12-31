import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { Bio } from "../../data/constants";
import Menu from "../../Images/hamburger.png";
import Close from "../../Images/close.png";
import useWindowDimensions from "../../utils/CurrentScreenSize";
import { motion } from "framer-motion";
import { MotionContainer } from "../../utils/MotionContainer";

const Navbar = () => {
  const [offsetLen, setoffsetLen] = useState(0);
  const [menu, SetMenu] = useState({
    display: "none",
    height: "3.8rem",
  });

  const [NavIcon, setNavIcon] = useState(Menu);

  const MenuBtn = () => {
    if (menu.display !== "none") {
      setNavIcon(Menu);
      SetMenu({
        display: "none",
        height: "3.8rem",
      });
    } else {
      setNavIcon(Close);
      SetMenu({
        display: "flex",
        height: "20rem",
      });
    }
  };
  const windowDimension = useWindowDimensions();
  const { width } = windowDimension;
  useEffect(() => {
    if (width > 991) {
      setoffsetLen(-80);
    } else {
      setoffsetLen(-350);
    }
  }, [width]);
  return (
    <div className="Nav" style={{ height: menu.height }}>
      <div className="NavContainer">
        <div className="NavLogo text-xl font-semibold">Portfolio</div>
        <div
          className="NavItems"
          id="NavItemsID"
          style={{ display: menu.display }}
        >
          <motion.div
            className="NavLink"
            variants={MotionContainer("up", 0.3, 0, 20)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link
              exact="true"
              activeclassname="active"
              aria-current="page"
              to="HeroSection"
              spy={true}
              smooth={true}
              offset={offsetLen}
              duration={400}
              onClick={MenuBtn}
            >
              Home
            </Link>
          </motion.div>
          <motion.div
            className="NavLink"
            variants={MotionContainer("up", 0.3, 0, 20)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link
              exact="true"
              activeclassname="active"
              aria-current="page"
              to="skill"
              spy={true}
              smooth={true}
              offset={offsetLen}
              duration={400}
              onClick={MenuBtn}
            >
              Skills
            </Link>
          </motion.div>
          <motion.div
            className="NavLink"
            variants={MotionContainer("up", 0.4, 0, 20)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link
              exact="true"
              activeclassname="active"
              aria-current="page"
              to="experience"
              spy={true}
              smooth={true}
              offset={offsetLen}
              duration={400}
              onClick={MenuBtn}
            >
              Experience
            </Link>
          </motion.div>
          <motion.div
            className="NavLink"
            variants={MotionContainer("up", 0.5, 0, 20)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link
              exact="true"
              activeclassname="active"
              aria-current="page"
              to="projects"
              spy={true}
              smooth={true}
              offset={offsetLen}
              duration={400}
              onClick={MenuBtn}
            >
              Projects
            </Link>
          </motion.div>
          <motion.div
            className="NavLink"
            variants={MotionContainer("up", 0.6, 0, 20)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link
              exact="true"
              activeclassname="active"
              aria-current="page"
              to="contact"
              spy={true}
              smooth={true}
              offset={offsetLen}
              duration={400}
              onClick={MenuBtn}
            >
              Contact
            </Link>
          </motion.div>
        </div>

        {/* Github button started */}
        <motion.div
          className="ButtonContainer githubcontainer"
          variants={MotionContainer("up", 0.8, 0, 20)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <a
            className="GithubBtnA"
            href={Bio.github}
            rel="noreferrer"
            target="_blank"
          >
            <p className="GithubButton">Github Profile</p>
          </a>
        </motion.div>
        {/* Github button ended */}
        {/* Linkedin button started */}
        <motion.div
          className="ButtonContainer Linkedincontainer"
          variants={MotionContainer("up", 0.9, 0, 20)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <a
            className="LinkedinBtnA"
            href={Bio.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <p className="LinkedinButton">Linkedin Profile</p>
          </a>
        </motion.div>
        {/*Linkedin button ended */}

        <div className="Menu">
          <img src={NavIcon} alt="Menu" id="Menu" onClick={MenuBtn} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
