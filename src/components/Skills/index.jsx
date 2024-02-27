import React from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <div className="skills-header">Skills</div>
      <div className="skills-content">
        <SkillsCard
          header="Languages"
          list={[
            "C",
            "JavaScript",
            "Typescript",
            "Python",
            "HTML",
            "CSS",
            "XML",
          ]}
        />
        <SkillsCard
          header="Frameworks"
          list={[
            "React",
            "React Native",
            "NodeJs",
            "ExpressJs",
            "Redux",
            "Bootstrap",
            "Jest and Enzyme",
            "Chai and Mocha",
          ]}
        />
        <SkillsCard
          header="Databases"
          list={["MySql", "PostgreSql", "Sequelize", "Oracle Database", "JDBC", "MongoDB",]}
        />
        <SkillsCard
          header="Tools and Services"
          list={[
            "Postman",
            "Git",
            "Jira",
            "Figma",
            "React DevTools",
            "Redux DevTools",
            "Jenkins",
            "AWS",
            "Docker",
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
