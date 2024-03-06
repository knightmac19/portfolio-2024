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
    <div className="resume-page container">
      <h2 className="header-md">Resume</h2>
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
