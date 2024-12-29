import React, { useEffect, useState } from "react";
import "./Experience.css";
import useWindowDimensions from "../CurrentScreenSize";
import { experiences } from "../../data/constants";

const Experience = () => {
  const { width } = useWindowDimensions();

  const [Companylogo_col, setCompanylogo_col] = useState("col-2");

  const [CompanyTitle_col, setCompanyTitle_col] = useState("col-10");

  const [SkillsHead_col, setSkillsHead_col] = useState("col-1");

  const [Skills_col, setSkills_col] = useState("col-11");

  useEffect(() => {
    if (width < 768 && width >= 500) {
      setCompanylogo_col("col-3");
      setCompanyTitle_col("col-8");
      setSkillsHead_col("col-2");
      setSkills_col("col-10");
    } else if (width > 768) {
      setCompanylogo_col("col-2");
      setCompanyTitle_col("col-10");
      setSkillsHead_col("col-1");
      setSkills_col("col-11");
    } else if (width < 500) {
      setCompanylogo_col("col-2");
      setCompanyTitle_col("col-10");
    }
  }, [width]);

  return (
    <div className="container expContainer" id="experience">
      <div className="ExpHeading">
        <h1>Experience</h1>
        <p className="ExpHeadingBody">
          My work experience as a Software Engineer and working on different
          companies and projects.
        </p>
      </div>

      {experiences.map((val, ind) => {
        const { image, role, company, date, desc, skills } = val;
        return (
          <div className="Exp_card" key={val.id}>
            <div className="row card_heading">
              <div className={Companylogo_col}>
                <div className="Clogo">
                  <img className="CompanyLogo" src={image} alt="CompanyLogo" />
                </div>
              </div>

              <div className={CompanyTitle_col}>
                <div className="title">
                  <h5>{company}</h5>
                  <h6>{role}</h6>
                  <p>{date}</p>
                </div>
              </div>
            </div>

            {skills && skills.length > 0 && (
              <div className="flex flex-col gap-2 mb-6 font-semibold">
                {skills.map((skills) => (
                  <button className="tags" key={skills.id}>
                    {skills}
                  </button>
                ))}
              </div>
            )}
            <p className="jobDesp">{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
