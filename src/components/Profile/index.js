const Profile = () => {
  return (
    <div id="profile" className="profile-wrapper">
      <div className="title-bg">
        <div className="title container">
          <h2 className="sub-header ">3.5 years in Tech Education</h2>
          <p>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet.
          </p>
          <div className="resume-link">
            <span className="link ">
              <a
                href="https://docs.google.com/document/d/1na7m96W9wxRnqFdkmKOGGR1SwPzswAE8vj6YZGe6V0U/edit?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="icon-text">
                  <div className="link-icon-wrapper">
                    <i className="fas fa-lg fa-file-alt"></i>
                  </div>

                  <span>Resume</span>
                </div>
              </a>
            </span>
          </div>
        </div>
      </div>

      <section className="profile-body container"></section>
    </div>
  );
};

export default Profile;
