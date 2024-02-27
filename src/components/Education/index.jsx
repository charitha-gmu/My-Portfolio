import React from "react";

const Education = () => {
  return (
    <div className="education-container" id="education">
      <div className="education-header">Education</div>

      <div className="education-content">
        <p className="italic-header">Bachelor's Degree</p>
        <p className="header">
          Bachelor of Technology in Computer Science and Engineering
        </p>
        <p className="college"> JNTUH College of Engineering</p>
        <p>2016 - 2020</p>
      </div>

      <div className="education-content">
        <p className="italic-header">Masters's Degree</p>
        <p className="header">Master of Science in Computer Science</p>
        <p className="college">George Mason University</p>
        <p className="timeline">2023 - 2024</p>
      </div>
    </div>
  );
};

export default Education;
