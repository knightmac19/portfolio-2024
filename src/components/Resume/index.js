import { useRef, useEffect, useState } from "react";
import Skill from "../Skill";

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
            <button className="btn view-resume-btn">View</button>
            <button className="btn download-resume-btn">Download</button>
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
