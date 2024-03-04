const Project = ({ project }) => {
  const { id, name, repo, deployed, screenshot, description } = project;

  return (
    <div className="project-card" key={id}>
      <img src={screenshot} alt={name} className="project-img" />
      <div className="card-info">
        <h2>
          <span>
            <a href={deployed}>{name}</a>
          </span>
          <span>
            <a href={deployed}>
              <i className="fas fa-location-arrow"></i>
            </a>
          </span>
          <span>
            <a href={repo}>
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
