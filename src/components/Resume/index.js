import { useRef, useEffect, useState } from "react";
import Skill from "../Skill";
import { Patrick_Dunn_Resume } from "../../assets";

const iconClasses = [
  { classes: "fab fa-github" },
  { classes: "fab fa-css3-alt" },
  { classes: "fab fa-bootstrap" },
  { classes: "fab fa-js-square" },
  { classes: "fab fa-npm" },
  { classes: "fab fa-html5" },
  { classes: "fab fa-codepen" },
  { classes: "fab fa-dev" },
  { classes: "fab fa-react" },
  { classes: "fab fa-node" },
  { classes: "fab fa-github" },
  { classes: "fab fa-css3-alt" },
  { classes: "fab fa-bootstrap" },
  { classes: "fab fa-js-square" },
  { classes: "fab fa-npm" },
  { classes: "fab fa-html5" },
  { classes: "fab fa-codepen" },
  { classes: "fab fa-dev" },
  { classes: "fab fa-react" },
  { classes: "fab fa-node" },
  { classes: "fab fa-github" },
  { classes: "fab fa-css3-alt" },
  { classes: "fab fa-bootstrap" },
  { classes: "fab fa-js-square" },
  { classes: "fab fa-npm" },
  { classes: "fab fa-html5" },
  { classes: "fab fa-codepen" },
  { classes: "fab fa-dev" },
  { classes: "fab fa-react" },
  { classes: "fab fa-node" },
  { classes: "fab fa-github" },
  { classes: "fab fa-css3-alt" },
  { classes: "fab fa-bootstrap" },
  { classes: "fab fa-js-square" },
  { classes: "fab fa-npm" },
  { classes: "fab fa-html5" },
  { classes: "fab fa-codepen" },
  { classes: "fab fa-dev" },
  { classes: "fab fa-react" },
  { classes: "fab fa-node" },
];

const Resume = () => {
  const ref = useRef(null);
  const [containerWidth, setWidth] = useState(80 + "vw");
  const [animationState, setPlay] = useState("paused");

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth + "px");
      setPlay("running");
    }
  }, []);

  const renderSkills = iconClasses.map((el, idx) => {
    return <Skill key={idx} iconClass={el.classes} />;
  });

  return (
    <div className="resume-page">
      <div className="resume-text-wrapper container">
        <h2 className="header-md">Resume</h2>
        <div className="btns-and-list">
          <div className="btns">
            <a
              href="https://docs.google.com/document/d/1na7m96W9wxRnqFdkmKOGGR1SwPzswAE8vj6YZGe6V0U/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn view-resume-btn"
            >
              View
            </a>
            <a
              href={Patrick_Dunn_Resume}
              download
              className="btn download-resume-btn"
            >
              Download
            </a>
          </div>
          <ul>
            <li>FULL STACK WEB DEVELOPMENT</li>
            <li>OBJECT RELATIONAL MAPPING</li>
            <li>PROGRESSIVE WEB APPS</li>
            <li>AGILE DEVELOPMENT</li>
            <li>STATE MANAGEMENT</li>
            <li>VERSION CONTROL</li>
            <li>THIRD-PARTY API'S</li>
            <li>MOBILE FIRST</li>
            <li>JAVASCRIPT</li>
            <li>EXPRESS</li>
            <li>MONGO</li>
            <li>MYSQL</li>
            <li>REACT</li>
            <li>NODE</li>
          </ul>
        </div>
      </div>
      <div className="skills-wrapper">
        <ul
          className="skills"
          ref={ref}
          style={{
            width: `${containerWidth}`,
            animationPlayState: animationState,
          }}
        >
          {renderSkills}
          {renderSkills}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
