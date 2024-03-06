import { fb_headshot } from "../../assets";

const About = () => {
  return (
    <div className="about-page-wrapper ">
      <h2 className="header-md ">About</h2>

      <section className="about-me container">
        <div className="img-wrapper">
          <img src={fb_headshot} alt="head and shoulders" />
        </div>
        <div className="about-me-text-wrapper">
          <p className="about-me-text">
            Hello, I’m Patrick Dunn, a full-stack web developer specializing in
            the MERN (Mongo, Express, React, Node) stack. With a sharp
            understanding of the mobile-first approach, I prioritize building
            responsive, lightweight, and component-driven applications. With 3
            years of hands-on experience in web development and technology
            education, I excel in collaborative environments. My strong
            communication skills enable me to seamlessly engage with clients and
            team members to ensure timely, high-quality results. Feel free to
            explore my projects, delve into my GitHub repositories, or check out
            my latest articles on Medium. I look forward to collaborating with
            you and bringing your ideas to life!
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
