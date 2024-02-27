import React from "react";
import Typewriter from "typewriter-effect";

const headerOptions = [
    {
        id: "#home",
        name: "HOME",
    },
    {
        id: "#aboutMe",
        name: "ABOUT ME",
    },
    {
        id: "#skills",
        name: "SKILLS",
    },
    {
        id: "#education",
        name: "EDUCATION",
    },
    {
        id: "#experience",
        name: "EXPERIENCE",
    },
    {
        id: "#contactMe",
        name: "CONTACT ME",
    },
];

const introData = {
  name: "I’m Sree Charitha Meka",
  animated: {
    first: "Passionate Software Developer",
    second: "A Technologist at Heart",
    third: "Devoted to Computer Science",
  },
};

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="header">
        {headerOptions?.map((ele, index) => {
          return (
            <div id={index} className="header-option">
              <a href={ele.id}>{ele.name}</a>
            </div>
          );
        })}
      </div>
      <div className="overlay-content">
        <h1 className="title">{introData?.name}</h1>
        <Typewriter
          options={{
            strings: [
              introData.animated.first,
              introData.animated.second,
              introData.animated.third,
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 10,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
