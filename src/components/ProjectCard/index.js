import { useEffect, useState } from "react";

const ProjectCard = ({ project }) => {
  const { id, name, repo, screenshot, benefit, techStack, live } = project;
  const getWindowDimensions = () => {
    const { innerWidth: width } = window;
    return { width };
  };

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowDimensions;
  };
  const { width } = useWindowDimensions();

  if (width < 410) {
    return (
      <div className="card-wrapper ">
        <img src={screenshot} alt={name} className="project-img" />

        <div className="text-wrapper">
          <h3>{name}</h3>

          <div className="links">
            <span className="link ">
              <a href={repo} rel="noopener noreferrer" target="_blank">
                <div className="icon-text">
                  <div className="link-icon-wrapper">
                    <i className="fab fa-lg fa-github"></i>
                  </div>

                  <span>Repository</span>
                </div>
              </a>
            </span>

            <span className="link ">
              <a href={live.address} rel="noopener noreferrer" target="_blank">
                <div className="icon-text">
                  <div className="link-icon-wrapper">
                    <i className={live.iconClass}></i>
                  </div>

                  <span>{live.text}</span>
                </div>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  } else if (width < 768) {
    return (
      <div className="card-wrapper ">
        <img src={screenshot} alt={name} className="project-img" />

        <div className="text-wrapper">
          <h3>{name}</h3>
          <a href={repo} rel="noopener noreferrer" target="_blank">
            <p>{benefit}</p>
          </a>

          <p>{techStack}</p>
          <div className="links">
            <span className="link ">
              <a href={repo} rel="noopener noreferrer" target="_blank">
                <div className="icon-text">
                  <div className="link-icon-wrapper">
                    <i className="fab fa-lg fa-github"></i>
                  </div>

                  <span>Repository</span>
                </div>
              </a>
            </span>

            <span className="link ">
              <a href={live.address} rel="noopener noreferrer" target="_blank">
                <div className="icon-text">
                  <div className="link-icon-wrapper">
                    <i className={live.iconClass}></i>
                  </div>

                  <span>{live.text}</span>
                </div>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    if (id % 2 === 0) {
      return (
        <div className="card-wrapper ">
          <div className="img-wrapper">
            <img src={screenshot} alt={name} />
          </div>

          <div className="text-wrapper">
            <h3>{name}</h3>
            <a href={repo} rel="noopener noreferrer" target="_blank">
              <p>{benefit}</p>
            </a>

            <p>{techStack}</p>
            <div className="links">
              <span className="link ">
                <a href={repo} rel="noopener noreferrer" target="_blank">
                  <div className="icon-text">
                    <div className="link-icon-wrapper">
                      <i className="fab fa-lg fa-github"></i>
                    </div>

                    <span>Repository</span>
                  </div>
                </a>
              </span>

              <span className="link ">
                <a
                  href={live.address}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="icon-text">
                    <div className="link-icon-wrapper">
                      <i className={live.iconClass}></i>
                    </div>

                    <span>{live.text}</span>
                  </div>
                </a>
              </span>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="card-wrapper ">
        <div className="text-wrapper">
          <h3>{name}</h3>
          <a href={repo} rel="noopener noreferrer" target="_blank">
            <p>{benefit}</p>
          </a>
          <p>{techStack}</p>
          <div className="links">
            <span className="link ">
              <a href={repo} rel="noopener noreferrer" target="_blank">
                <div className="icon-text">
                  <div className="link-icon-wrapper">
                    <i className="fab fa-lg fa-github"></i>
                  </div>

                  <span>Repository</span>
                </div>
              </a>
            </span>

            <span className="link ">
              <a href={live.address} rel="noopener noreferrer" target="_blank">
                <div className="icon-text">
                  <div className="link-icon-wrapper">
                    <i className={live.iconClass}></i>
                  </div>

                  <span>{live.text}</span>
                </div>
              </a>
            </span>
          </div>
        </div>
        <div className="img-wrapper">
          <img src={screenshot} alt={name} />
        </div>
      </div>
    );
  }
};

export default ProjectCard;
