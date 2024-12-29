import Weather_App_pic from "../Images/Project Demo Pics/Weather2.png";
import Blog_Management from "../Images/Project Demo Pics/BlogManagement.png";
import SwiggyThumbnail from "../Images/Project Demo Pics/SwiggyThumbnail.png";
import CompanyLogo from "../Images/DGDE-Logo2.png";
import html from "../../src/Images/SkillsIcons/html.png";
import css from "../../src/Images/SkillsIcons/css.png";
import javascript from "../../src/Images/SkillsIcons/javascript.png";
// import bootstrap from "../../src/Images/SkillsIcons/bootstrap.png";
import react from "../../src/Images/SkillsIcons/react.png";
import redux from "../../src/Images/SkillsIcons/redux.png";
import nodejs from "../../src/Images/SkillsIcons/nodejs.png";
import postgresql from "../../src/Images/SkillsIcons/postgresql.png";
import git from "../../src/Images/SkillsIcons/git.png";
import jquery from "../../src/Images/SkillsIcons/jquery.png";
import MongoDB from "../../src/Images/SkillsIcons/MongoDB.png";
import Tailwind from "../../src/Images/SkillsIcons/Tailwind.png";
import NextJs from "../../src/Images/SkillsIcons/Nextjs.png";

export const Bio = {
  name: "Ankit Ahuja",
  roles: ["Frontend Developer", "Programmer"],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/ankitahuja98/",
  resume:
    "https://drive.google.com/file/d/1og8_TlUOZ-AIe8bK0Fq8XD_EpoF1ePxH/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/ankitahuja98/",
};

export const projects = [
  {
    id: 1,
    title: "Swiggy Clone",
    date: "",
    description:
      "I developed a responsive Swiggy Clone using ReactJS, integrating Swiggy's API to fetch real-time data. The app features advanced search functionality, filters, detailed menus, ratings, and personalized restaurant recommendations based on location. It utilizes Redux Toolkit for efficient state management and Tailwind CSS for a fully responsive design, enhancing the user experience with visually engaging shimmer effects.",
    image: SwiggyThumbnail,
    alt: "Weather_App_pic",
    tags: [
      "React Js",
      "Redux",
      "Node JS",
      "Tailwind",
      "Swiggy Live API",
      "GeoCode Map API",
      // "Javascript",
      // "API Integration",
      // "Real Time Restaurant",
    ],
    category: "web app",
    github: "https://github.com/ankitahuja98/swiggyclone",
    webapp: "https://swiggyclonee.netlify.app/",
  },
  {
    id: 2,
    title: "Blog Management",
    date: "",
    description:
      "Blog Management App, a fully responsive and user-friendly solution for managing blog posts across devices. Built with React and styled using Tailwind CSS, this app offers seamless post creation, viewing, and deletion. Key features include real-time form validation for titles, descriptions, and categories, along with toast notifications for instant feedback. The app leverages Redux Toolkit for state management, ensuring persistent data even after page reloads. Reusable components like BlogCard and FormInput make the codebase clean and efficient. With responsive design, a detailed blog view, and confirmation dialogs, the app delivers a smooth and intuitive blogging experience.",
    image: Blog_Management,
    alt: "Blog_pic",
    tags: [
      "React Js",
      "Redux",
      "Javascript",
      "Redux-Persist",
      "Tailwind",
      "Material UI",
    ],
    category: "web app",
    github: "https://github.com/ankitahuja98/BlogManagement.git",
    webapp: "https://best-blogs.netlify.app",
  },
  {
    id: 3,
    title: "Weather App",
    date: "",
    description:
      "Created dynamic Weather application leverages the OpenWeatherMap API to provide real-time information includes city-specific weather, temperature, humidity, and wind speed.",
    image: Weather_App_pic,
    alt: "Weather_App_pic",
    tags: ["React Js", "Javascript", "Weather API", "Bootstrap", "Material UI"],
    category: "web app",
    github: "https://github.com/ankitahuja98/weatherapp",
    webapp: "https://ankitahuja98.github.io/weatherapp/",
  },
];

export const skillSet1 = [
  { id: 1, name: "ReactJS", image: react },
  { id: 2, name: "Redux", image: redux },
  { id: 3, name: "NextJS", image: NextJs },
  { id: 4, name: "NodeJS", image: nodejs },
  { id: 5, name: "Javascript", image: javascript },
  { id: 6, name: "MongoDB", image: MongoDB },
];
export const skillSet2 = [
  { id: 7, name: "PostgreSQL", image: postgresql },
  { id: 8, name: "Tailwind", image: Tailwind },
  // {
  //   name: "Bootstrap",
  //   image: bootstrap,
  // },
  { id: 9, name: "JQuery", image: jquery },
  { id: 10, name: "GIT", image: git },
  { id: 11, name: "HTML", image: html },
  { id: 12, name: "CSS", image: css },
];

export const experiences = [
  {
    id: 0,
    image: CompanyLogo,
    role: "Frontend Developer",
    company: "Directorate General Defence Estates",
    date: "March/2021 - Present",
    desc: [
      {
        pt: 0,
        heading: "3+ Years of Experience | Development & Optimization:",
        body: "Led the design and development of a web-based RTRM (Real-Time Record Management) system for managing defense land records across India using ReactJS, Redux, SpringBoot, and more, supporting 100+ users. Optimized app performance through code-splitting, lazy loading, and debouncing techniques. Developed advanced modules like Encroachment Tracking and dynamic reporting features with Material UI, Tailwind CSS, and Redux Toolkit for smooth data input, management, and reporting.",
      },
    ],
    skills: [
      "ReactJS",
      "Redux",
      "NextJS",
      "NodeJS",
      "Javascript",
      "Webpack",
      "PostgreSQL",
      "MongoDB",
      "Jest",
      "GIT",
      // "Bootstrap",
      "Tailwind",
      "API Integration",
      "Netlify",
      "HTML",
      "CSS",
    ],
  },
];
