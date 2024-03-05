const Project = ({ project }) => {
  const { id, name, repo, deployed, screenshot, description } = project;

  return (
    <div className="project-card" key={id}>
      <img src={screenshot} alt={name} className="project-img" />
      <div className="card-info">
        <h2>
          <span>
            <a href={deployed} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </span>
          <span>
            <a href={deployed} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-location-arrow"></i>
            </a>
          </span>
          <span>
            <a href={repo} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-lg fa-github"></i>
            </a>
          </span>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;
