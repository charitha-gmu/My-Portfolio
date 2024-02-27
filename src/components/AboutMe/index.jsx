import React from "react";
import { Email, Github, LinkedIn, Resume } from "../../assets/images";
import ResumePdf from "../../documents/Sree_Charitha_Meka_Resume_Latest.pdf";

const description =
  "A dynamic and impactful Software Development Engineer with over three years of experience. I have a proven track record in developing high-quality web and mobile applications. My expertise encompasses modern technologies like React, React Native, and Node.js, with a focus on optimizing performance and user experience. Adept in team collaboration and project leadership, I've successfully led initiatives, ensuring both technical excellence and effective team coordination. My professional journey is defined by a dedication to innovation, quality, and impactful software solutions.";
const header =
  "I'm a Full Stack Developer, currently working pursuing masters in Computer Science at George Mason University";

const AboutMe = () => {
  const handleResumeDownloadClick = () => {
    const fileUrl = ResumePdf; // Replace with the actual path to your resume file
    const link = document.createElement("a");

    link.href = fileUrl;
    link.download = "Sree_Charitha_Resume.pdf"; // You can customize the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-me-container" id="aboutMe">
      <div className="about-me-header">About Me</div>
      <div className="about-me-content">
        <div className="main-content">{header}</div>
        <div className="description">{description}</div>
      </div>
      <div className="social-media-icons-container">
        <img
          className="social-media-icon resume"
          src={Resume}
          alt="resume"
          onClick={handleResumeDownloadClick}
        />
        <a href="https://github.com/charitha-gmu" target="_blank" rel="noopener noreferrer">
          <img className="social-media-icon" src={Github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/charitha-meka-6a7ab0165/" target="_blank" rel="noopener noreferrer">
          <img className="social-media-icon" src={LinkedIn} alt="linkedin" />
        </a>
        <a href="mailto:smeka2@gmu.edu">
          <img className="social-media-icon" src={Email} alt="email" target="_blank" rel="noopener noreferrer"/>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
