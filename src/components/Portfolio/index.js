import {
  money_dunn_right,
  top_scorers,
  complete_weather,
  employee_directory,
  saas_site,
  wordle_helper,
} from "../../assets";

const projects = [
  {
    id: 0,
    name: "Money Dunn Right",
    tech: ["MERN"],
    repo: "https://github.com/knightmac19/Money-Dunn-Right",
    deployed: "https://money-dunn-right.netlify.app/",
    demoVideo: "",
    screenshot: money_dunn_right,
    description: "Personal Finance",
  },
  {
    id: 1,
    name: "Top Scorers",
    tech: ["HTML", "CSS", "JS"],
    repo: "https://github.com/knightmac19/Top-Scorers",
    deployed: "https://knightmac19.github.io/Top-Scorers/",
    demoVideo: "",
    screenshot: top_scorers,
    description: "Premier League Top Scorers",
  },
  {
    id: 2,
    name: "Complete Weather",
    tech: ["HTML", "CSS", "JS"],
    repo: "https://github.com/knightmac19/CompleteWeather",
    deployed: "https://knightmac19.github.io/CompleteWeather/",
    demoVideo: "",
    screenshot: complete_weather,
    description: "Current & Future Weather",
  },
  {
    id: 3,
    name: "Employee Directory",
    tech: ["REACT"],
    repo: "https://github.com/knightmac19/employee-directory-pmd",
    deployed: "https://knightmac19.github.io/employee-directory-pmd/",
    demoVideo: "",
    screenshot: employee_directory,
    description: "Sort & Filter Employees",
  },
  {
    id: 4,
    name: "Saas Site",
    tech: ["HTML", "CSS", "JS"],
    repo: "https://github.com/knightmac19/site-saas",
    deployed: "https://knightmac19.github.io/site-saas/",
    demoVideo: "",
    screenshot: saas_site,
    description: "Responsive Saas Site",
  },
  {
    id: 5,
    name: "Wordle Helper",
    tech: ["HTML", "CSS", "JS"],
    repo: "https://github.com/knightmac19/wh-mockup",
    deployed: "https://knightmac19.github.io/wh-mockup/",
    demoVideo: "",
    screenshot: wordle_helper,
    description: "Solve Wordles!",
  },
  // {
  //   id: 6,
  //   name: "E-Commerce Backend",
  //   tech: ["JS", "Node", "MySQL", "Express"],
  //   repo: "https://github.com/knightmac19/E-Commerce-Backend",
  //   deployed: "",
  //   demoVideo: "",
  //   screenshot: "",
  //   description: "E-Commerce CRUD Routes",
  // },
  // {
  //   id: 7,
  //   name: "Company-CLI",
  //   tech: ["JS", "Node", "MySQL", "Inquirer"],
  //   repo: "https://github.com/knightmac19/Company-CLI",
  //   deployed: "",
  //   demoVideo: "",
  //   screenshot: "",
  //   description: "Manage MySQL DB from the Command Line",
  // },
  // {
  //   id: 8,
  //   name: "Trivia Quiz",
  //   tech: ["HTML", "CSS", "JS", "Bootstrap"],
  //   repo: "https://github.com/knightmac19/TriviaQuiz",
  //   deployed: "https://knightmac19.github.io/TriviaQuiz/",
  //   demoVideo: "",
  //   screenshot: "",
  //   description: "Timed Trivia Quiz",
  // },
  // {
  //   id: 9,
  //   name: "Password Generator",
  //   tech: ["HTML", "CSS", "JS"],
  //   repo: "https://github.com/knightmac19/PasswordGenerator",
  //   deployed: "https://knightmac19.github.io/PasswordGenerator/",
  //   demoVideo: "",
  //   screenshot: "",
  //   description: "Generate Random Passwords",
  // },
  // {
  //   id: 10,
  //   name: "To-Do List",
  //   tech: ["HTML", "CSS", "JS"],
  //   repo: "https://github.com/knightmac19/ToDoList",
  //   deployed: "https://knightmac19.github.io/ToDoList/",
  //   demoVideo: "",
  //   screenshot: "",
  //   description: "Jot Down To-Do's",
  // },
];

const Portfolio = () => {
  return (
    <div className="portfolio container">
      <h2 className="header-md">Portfolio</h2>
    </div>
  );
};

export default Portfolio;
