import React from "react";
import "./Footer.css";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer flex justify-center items-center">
      <div className="w-11/12 sm:w-10/12 flex justify-between items-center">
        <p className="footerText mb-0 mx-2 sm:mx-4">
          Copyright &#169; 2024 | All Rights Reserved
        </p>
        <Link
          className="topIconDiv mx-2 sm:mx-4"
          to="HeroSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={400}
        >
          <PublishIcon className="topIcon" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
