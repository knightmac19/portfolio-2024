import {
  money_dunn_right,
  top_scorers,
  complete_weather,
  employee_directory,
  saas_site,
  wordle_helper,
} from "../../assets";

import ProjectCard from "../ProjectCard";

const projects = [
  {
    id: 0,
    name: "Money Dunn Right",
    tech: ["MERN"],
    repo: "https://github.com/knightmac19/Money-Dunn-Right",
    deployed: "https://money-dunn-right.netlify.app/",
    demoVideo: "",
    screenshot: money_dunn_right,
    benefit:
      "Personal finance application for those who want to manage transactions on the go",
    techStack: "Built with MERN stack",
  },
  {
    id: 1,
    name: "Top Scorers",
    tech: ["HTML", "CSS", "JS"],
    repo: "https://github.com/knightmac19/Top-Scorers",
    deployed: "https://knightmac19.github.io/Top-Scorers/",
    demoVideo: "",
    screenshot: top_scorers,
    benefit: "Query and sort Premier League Top Scorers",
    techStack: "Built with HTML, CSS, & vanilla JS",
  },
  {
    id: 2,
    name: "Complete Weather",
    tech: ["HTML", "CSS", "JS"],
    repo: "https://github.com/knightmac19/CompleteWeather",
    deployed: "https://knightmac19.github.io/CompleteWeather/",
    demoVideo: "",
    screenshot: complete_weather,
    benefit: "Find current and future weather",
    techStack: "HTML, CSS, & vanilla JS powered by openweathermap API",
  },
  {
    id: 3,
    name: "Employee Directory",
    tech: ["REACT"],
    repo: "https://github.com/knightmac19/employee-directory-pmd",
    deployed: "https://knightmac19.github.io/employee-directory-pmd/",
    demoVideo: "",
    screenshot: employee_directory,
    benefit: "Quickly find an employee by searching by any value",
    techStack: "Frontend React application",
  },
  {
    id: 4,
    name: "Saas Site",
    tech: ["HTML", "CSS", "JS"],
    repo: "https://github.com/knightmac19/site-saas",
    deployed: "https://knightmac19.github.io/site-saas/",
    demoVideo: "",
    screenshot: saas_site,
    benefit: "Responsive Saas Site",
    techStack: "",
  },
  {
    id: 5,
    name: "Wordle Helper",
    tech: ["HTML", "CSS", "JS"],
    repo: "https://github.com/knightmac19/wh-mockup",
    deployed: "https://knightmac19.github.io/wh-mockup/",
    demoVideo: "",
    screenshot: wordle_helper,
    benefit: "Narrow down possible solutions by inputting clues",
    techStack: "HTML, CSS, & vanilla JS",
  },
  // {
  //   id: 6,
  //   name: "E-Commerce Backend",
  //   tech: ["JS", "Node", "MySQL", "Express"],
  //   repo: "https://github.com/knightmac19/E-Commerce-Backend",
  //   deployed: "",
  //   demoVideo: "",
  //   screenshot: "",
  //   benefit: "E-Commerce CRUD Routes",

  // },
  // {
  //   id: 7,
  //   name: "Company-CLI",
  //   tech: ["JS", "Node", "MySQL", "Inquirer"],
  //   repo: "https://github.com/knightmac19/Company-CLI",
  //   deployed: "",
  //   demoVideo: "",
  //   screenshot: "",
  //   benefit: "Manage MySQL DB from the Command Line",

  // },
  // {
  //   id: 8,
  //   name: "Trivia Quiz",
  //   tech: ["HTML", "CSS", "JS", "Bootstrap"],
  //   repo: "https://github.com/knightmac19/TriviaQuiz",
  //   deployed: "https://knightmac19.github.io/TriviaQuiz/",
  //   demoVideo: "",
  //   screenshot: "",
  //   benefit: "Timed Trivia Quiz",

  // },
  // {
  //   id: 9,
  //   name: "Password Generator",
  //   tech: ["HTML", "CSS", "JS"],
  //   repo: "https://github.com/knightmac19/PasswordGenerator",
  //   deployed: "https://knightmac19.github.io/PasswordGenerator/",
  //   demoVideo: "",
  //   screenshot: "",
  //   benefit: "Generate Random Passwords",

  // },
  // {
  //   id: 10,
  //   name: "To-Do List",
  //   tech: ["HTML", "CSS", "JS"],
  //   repo: "https://github.com/knightmac19/ToDoList",
  //   deployed: "https://knightmac19.github.io/ToDoList/",
  //   demoVideo: "",
  //   screenshot: "",
  //   benefit: "Jot Down To-Do's",

  // },
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
