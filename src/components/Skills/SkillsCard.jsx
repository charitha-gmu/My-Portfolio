import React from "react";

const SkillsCard = (props) => {
  const { header, list } = props;

  return (
    <div className="skills-card">
      <div className="header">{header}</div>
      <div className="list">
        {list?.map((ele) => {
            return <p className="list-element">{ele}</p>
        })}
      </div>
    </div>
  );
};

export default SkillsCard;
