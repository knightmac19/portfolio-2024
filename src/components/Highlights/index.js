const Highlights = () => {
  return (
    <div id="facts" className="facts-wrapper">
      <section className="facts container">
        <div className="facts-segment">
          <h2 className="sub-header">Superpowers</h2>
          <div className="facts-icon">
            <i className="fas fa-code"></i>
          </div>
          <ul>
            <li>Speak 3 languages: English, Spanish, German</li>
            <li>Lived in Mexico for 4 years</li>
            <li>Regularly train Brazilian Jiu Jitsu</li>
          </ul>
        </div>
        <div className="facts-segment">
          <h2 className="sub-header">Fun Facts</h2>
          <div className="facts-icon">
            <i className="fas fa-language"></i>
          </div>
          <ul>
            <li>Speak 3 languages: English, Spanish, German</li>
            <li>Lived in Mexico for 4 years</li>
            <li>Regularly train Brazilian Jiu Jitsu</li>
          </ul>
        </div>
        <div className="facts-segment">
          <h2 className="sub-header">What matters to me</h2>
          <div className="facts-icon">
            <i className="fas fa-heart"></i>
          </div>
          <ul>
            <li>Be sincere and honest</li>
            <li>Practice kindness with yourself and others</li>
            <li>Appreciate each person's humanity</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Highlights;
