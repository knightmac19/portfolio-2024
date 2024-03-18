const Profile = () => {
  return (
    <div id="profile" className="profile-wrapper">
      <div className="title-bg">
        <div className="title container">
          <h2 className="sub-header ">3.5 years in Tech Education</h2>
          <p>
            For the past 3.5 years I’ve been working in the tech ed space. I’ve
            helped graders and students improve their technical ability through
            personalized, in-depth feedback.
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

      <section className="profile-body-wrapper">
        <div className="profile-body container">
          <div className="left-items">
            <div className="card ">
              <h4>
                <i className=" icon fas fa-file-signature"></i>Helped students
                on their journey
              </h4>

              <ul>
                <li>Tutored students on coding challenges</li>
                <li>
                  Provided technical feedback on thousands of applications
                </li>
              </ul>
            </div>
            <div className="card ">
              <h4>
                <i className=" icon fas fa-language"></i>Led bilingual initiave
              </h4>

              <ul>
                <li>Managed group of Spanish-speaking graders</li>
                <li>Led grading for pilot program given in Spanish</li>
              </ul>
            </div>
            <div className="card ">
              <h4>
                <i className=" icon fas fa-microscope"></i>Wrote department SOP
                on plagiarism
              </h4>

              <ul>
                <li>Led virtual training sessions</li>
                <li>Empowered graders to quickly & efficiently find proof</li>
                <li>Focused on student growth rather than punishment</li>
              </ul>
            </div>
          </div>
          <div className="right-items">
            <div className="card ">
              <h4>
                <i className=" icon fas fa-users"></i>Managed team of graders
              </h4>

              <ul>
                <li>Led individual & group coaching sessions</li>
                <li>Ran monthly audits to assess KPI's</li>
                <li>Conducted performance reviews</li>
                <li>Designed and implemented Corrective Action Plans</li>
              </ul>
            </div>
            <div className="card ">
              <h4>
                <i className="icon fas fa-fire-extinguisher"></i>Proactively
                addressed emergencies
              </h4>

              <ul>
                <li>Preempted issues by auditing graduating classes</li>
                <li>Recorded training videos for graders</li>
                <li>
                  Developed resources explaining new curriculum assignments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
