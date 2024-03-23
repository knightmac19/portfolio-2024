import {
  money_dunn_right,
  top_scorers,
  complete_weather,
  employee_directory,
  wordle_helper,
  company_cli,
} from "../../assets";

import ProjectCard from "../ProjectCard";

const projects = [
  {
    id: 0,
    name: "Money Dunn Right",
    tech: ["MERN"],
    repo: "https://github.com/knightmac19/Money-Dunn-Right",
    live: {
      text: "Deployed",
      address: "https://money-dunn-right.netlify.app/",
      iconClass: "fas fa-rocket",
    },
    screenshot: money_dunn_right,
    benefit:
      "Personal finance application for those who want to manage transactions on the go",
    techStack: "Built with MERN stack",
  },
  {
    id: 1,
    name: "Wordle Helper",
    tech: ["HTML", "CSS", "JS"],
    repo: "https://github.com/knightmac19/wh-mockup",
    live: {
      text: "Deployed",
      address: "https://knightmac19.github.io/wh-mockup/",
      iconClass: "fas fa-rocket",
    },
    screenshot: wordle_helper,
    benefit: "Narrow down possible solutions by inputting clues",
    techStack: "HTML, CSS, & vanilla JS",
  },
  {
    id: 2,
    name: "Top Scorers",
    tech: ["HTML", "CSS", "JS"],
    repo: "https://github.com/knightmac19/Top-Scorers",
    live: {
      text: "Deployed",
      address: "https://knightmac19.github.io/Top-Scorers/",
      iconClass: "fas fa-rocket",
    },
    screenshot: top_scorers,
    benefit: "Query and sort Premier League Top Scorers",
    techStack: "Built with HTML, CSS, & vanilla JS",
  },
  {
    id: 3,
    name: "Company-CLI",
    tech: ["JS", "Node", "MySQL", "Inquirer"],
    repo: "https://github.com/knightmac19/Company-CLI",
    live: {
      text: "Demo Video",
      address:
        "https://drive.google.com/file/d/1GOCBRBQeBcHONkTgRCGuL8X9c20873kD/view?usp=sharing",
      iconClass: "fas fa-video",
    },
    screenshot: company_cli,
    benefit: "Manage MySQL DB from the Command Line",
  },
  {
    id: 4,
    name: "Complete Weather",
    tech: ["HTML", "CSS", "JS"],
    repo: "https://github.com/knightmac19/CompleteWeather",
    live: {
      text: "Deployed",
      address: "https://knightmac19.github.io/CompleteWeather/",
      iconClass: "fas fa-rocket",
    },
    screenshot: complete_weather,
    benefit: "Find current and future weather",
    techStack: "HTML, CSS, & vanilla JS powered by openweathermap API",
  },
  {
    id: 5,
    name: "Employee Directory",
    tech: ["REACT"],
    repo: "https://github.com/knightmac19/employee-directory-pmd",
    live: {
      text: "Deployed",
      address: "https://knightmac19.github.io/employee-directory-pmd/",
      iconClass: "fas fa-rocket",
    },
    screenshot: employee_directory,
    benefit: "Quickly find an employee by searching by any value",
    techStack: "Frontend React application",
  },
];

const Project = () => {
  return (
    <div id="projects" className="projects-wrapper">
      <div className="title">
        <h2 className="sub-header container">Projects</h2>
      </div>

      <section className="project-cards-wrapper container">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </section>
    </div>
  );
};

export default Project;
