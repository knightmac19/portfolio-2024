const ProjectCard = ({ project }) => {
  const { id, name, repo, deployed, screenshot, benefit, techStack } = project;

  if (id % 2 === 0) {
    return (
      <div className="card-wrapper dev-bdr ">
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
                  <i className="fab fa-lg fa-github"></i>
                  <span>Repository</span>
                </div>
              </a>
            </span>

            <span className="link ">
              <a href={deployed} rel="noopener noreferrer" target="_blank">
                <div className="icon-text">
                  <i className="fas fa-rocket"></i>
                  <span>Deployed</span>
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
                <i className="fab fa-lg fa-github"></i>
                <span>Repository</span>
              </div>
            </a>
          </span>

          <span className="link ">
            <a href={deployed} rel="noopener noreferrer" target="_blank">
              <div className="icon-text">
                <i className="fas fa-rocket"></i>
                <span>Deployed</span>
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
};

export default ProjectCard;
