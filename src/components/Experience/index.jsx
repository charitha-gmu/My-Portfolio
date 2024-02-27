import React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { Work } from "../../assets/images";

const Experience = () => {
  return (
    <div className="experience-container" id="experience">
      <div className="experience-header">Experience</div>
      <div className="experience-content">
        <div className="sub-header">Professional Experience</div>
        <Timeline>
          <TimelineEvent
            title="Graduate Assistant - George Mason University"
            createdAt="May 2023 – Present"
            icon={<img src={Work} alt="uml" className="timeline-icon"></img>}
          >
            <ul>
              <li>
                Demonstrate proficiency in SDLC methodologies, documenting
                system requirements, designing UML and DFDs, applying basic UX
                design principles. Led and assisted 100+ students in grasping
                feasibility analysis, process modeling, use-case scenarios etc.
              </li>
              <li>
                Architected applications for MDM, Transcribe, and LLM from
                inception, involving functional requirements analysis, creation
                of DFDs, basic UX designs, documentation, and implementation of
                frontend UI using React with Typescript.
              </li>
            </ul>
          </TimelineEvent>
          <TimelineEvent
            title="Software Development Engineer - West Agile Labs"
            createdAt="Jan 2020 – Dec 2022"
            icon={<img src={Work} alt="react" className="timeline-icon"></img>}
            className="timeline-items"
          >
            <ul>
              <li>
                Designed and developed 6+ web and mobile applications, including
                those for automating laundry business, social media platforms,
                and a booking application using React, React Native, and
                Node.js.
              </li>
              <li>
                Refactored legacy code to ES6 features and new features like
                hooks, redux, context API, and functional components.
                Established test suites for UI and functionality using Jest and
                Enzyme to ensure performance, quality, and responsiveness.
              </li>
              <li>
                Collaborated closely with Product and Design teams to gain
                understanding of their functional needs and design
                specifications and worked collaboratively with the Architecture
                and Development teams to propose tailored solutions.
              </li>
              <li>
                Led a 10-member team as Squad Lead, overseeing sprint
                brainstorming, task breakdown and distribution among developers.
              </li>
              <li>
                Mentored a team of 3+ junior developers, solidifying my
                knowledge, honing our collaborative problem-solving approach,
                fostering a culture of clear communication and impactful
                presentations.
              </li>
            </ul>
          </TimelineEvent>
          <TimelineEvent
            title="Application Development Intern - Engineer’s Hub, Mivo Solutions"
            createdAt="Jun 2019 – Aug 2019"
            icon={<img src={Work} alt="node" className="timeline-icon"></img>}
          >
            <ul>
              <li>
                Learned React Native and worked on UI/UX of mobile application
                with smooth flow, Utilized Android Studio and XCode development
                environment to visualize and generate build in both Android and
                iOS respectively.
              </li>
            </ul>
          </TimelineEvent>
        </Timeline>
      </div>

      {/* <div className="experience-content">
        <div className="sub-header">Projects</div>
        <Timeline>
          <TimelineEvent
            title="Graduate Assistant | React, Typescript, UML, Figma"
            createdAt="May 2023 - Jul 2023"
            icon={<img src={UML} alt="uml" className="timeline-icon"></img>}
          >
            <ul>
              <li>
                Architected applications for MDM, Transcribe, and LLM from
                inception, involving functional requirements analysis,
                documentation, creation of DFDs, basic UX designs, and
                implementation of frontend UI using React with Typescript.
              </li>
            </ul>
          </TimelineEvent>

          <TimelineEvent
            title="University Department Website | Angular, Spring Boot, Kubernetes, Amazon RDS, Docker"
            createdAt="May 2023 - Aug 2023"
            icon={<img src={Work} alt="node" className="timeline-icon"></img>}
          >
            <ul>
              <li>
                Spearheaded the development of a dynamic Angular2 web
                application facilitating student surveys, data extraction from
                PDFs, and data analysis, leveraging Amazon RDS for efficient
                data management.
              </li>
              <li>
                Orchestrated deployment and scaling using Rancher with
                Kubernetes and utilizing Docker for containerization on AWS EC2.
              </li>
              <li>
                Implemented a Jenkins pipeline for continuous integration and
                deployment, automating build and deployment processes.
              </li>
            </ul>
          </TimelineEvent>

          <TimelineEvent
            title="MiLegacy | React, Typescript, NodeJs"
            createdAt="Nov 2022 - Dec 2022"
            icon={
              <img src={NodeJs} alt="react" className="timeline-icon"></img>
            }
          >
            <ul>
              <li>
                Streamlined and crafted intricate, responsive UI features
                encompassing establishing social connections, posting content,
                story functionality, leading to a 25% increase in user
                engagement with consistent multi-device compatibility.
              </li>
              <li>
                Reduced application loading time by 30% through optimization
                techniques like code splitting, lazy loading, memoization,
                reduced re-renders, dependency optimizations, debounce and
                throttling.
              </li>
              <li>
                Developed backend functionalities using NodeJS, including secure
                JWT authentication for user logins. Implemented features for
                users to create, edit, and delete posts, along with support for
                uploading and displaying images.
              </li>
            </ul>
          </TimelineEvent>

          <TimelineEvent
            title="Gradshack | React, HTML, Tailwind CSS"
            createdAt="Dec 2020 - Dec 2022"
            icon={
              <img src={ReactJs} alt="node" className="timeline-icon"></img>
            }
          >
            <ul>
              <li>
                Crafted responsive UI components for social media application
                promoting network-building and investment opportunity. Managed
                weekly meetings with stakeholders, communicated updates, and
                presented complex concepts, enhancing rapport.
              </li>
              <li>
                Integrated twilio for chatting capabilities, Cordova wrapper for
                iOS build generation, Pushy for real time notifications.
              </li>
            </ul>
          </TimelineEvent>

          <TimelineEvent
            title="TryCents | JavaScript, React, React Native, NodeJs, Redux, Sass"
            createdAt="Jan 2020 - Nov 2022"
            icon={<img src={NodeJs} alt="node" className="timeline-icon"></img>}
          >
            <ul>
              <li>
                Engineered web and mobile applications from ground for laundry
                automation, which encompasses custom CRM, dashboard, live-link,
                and dedicated apps for employees, drivers, and intake. This led
                to 60% enhancements in laundry operations.
              </li>
              <li>
                Received Mountain Mover Award for exceptional contributions and
                the consistently delivering high quality products on time.
              </li>
              <li>
                Participated in project setups, POCs, established reusable
                services, built custom components and hooks, integrated secure
                routes, and authored FE and BE test cases that achieved 100%
                coverage, resulting in a 27% reduction in system bugs.
              </li>
              <li>
                Improved React Native employee application by refactoring class
                to pure functional components, optimizing navigation routes,
                enhanced list rendering with FlatList, state normalization,
                achieving 30% reduction in loading times, app size decreased by
                25%.
              </li>
              <li>
                Enhanced backend functionality using Node.js, implementing
                various API integrations for streamlined operations. Integrated
                Stripe for efficient and secure payment processing.
              </li>
            </ul>
          </TimelineEvent>
        </Timeline>
        ,
      </div> */}

      <div className="experience-content">
        <div className="sub-header">Projects</div>

        <a
          href="https://charitha-gmu.github.io/SkinBook/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="sub-card">
            <p className="header">
              SkinBook |
              <span className="italic-header">
                React, Python, Flask, MongoDB, AWS
              </span>
            </p>
            <p className="description">
              SkinBook leverages AI to provide precise skin analyses and
              customized skincare routines in seconds. It addresses a range of
              skin concerns, from acne to aging, offering users tailored advice
              and actionable routines to improve their skin health.
            </p>
          </div>
        </a>

        <a
          href="https://mhhrproperties.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="sub-card">
            <p className="header">
              MHHR Properties |
              <span className="italic-header">
                Typescript, React, NodeJs, Express, PostgreSql
              </span>
            </p>
            <p className="description">
              MHHR Properties provide exceptional services in making the renting
              easy and efficient with cutting-edge technology. It ensures both
              owners and renters receive outstanding support.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/charitha-gmu/SWE-645-Assignment-3-APIs/tree/master"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="sub-card">
            <p className="header">
              University Department Website |
              <span className="italic-header">
                Angular, Spring Boot, Kubernetes, Amazon RDS, Docker
              </span>
            </p>

            <p className="description">
              An Angular web application facilitating student surveys, data
              extraction from PDFs, and data analysis, leveraging Amazon RDS for
              efficient data management.
            </p>
          </div>
        </a>

        {/* <a
          href="https://charitha-gmu.github.io/SkinBook/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="sub-card">
            <p className="header">
              MiLegacy |{" "}
              <span className="italic-header">React, Typescript, NodeJs</span>
            </p>
            <p className="college">George Mason University</p>
            <p className="timeline">Nov 2022 - Dec 2022</p>
          </div>
        </a> */}

        {/* <a
          href="https://www.gradshack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="sub-card">
            <p className="header">
              Gradshack |{" "}
              <span className="italic-header">React, HTML, Tailwind CSS</span>
            </p>
            <p className="description">
              Gradshack is a platform for building networks that links
              individuals across university communities, enabling them to
              transform business concepts into tangible realities.
            </p>
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default Experience;
