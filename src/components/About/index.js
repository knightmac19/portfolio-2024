import { fb_headshot } from "../../assets";

const About = () => {
  return (
    <div id="about" className="about-wrapper">
      <section className="about-me container ">
        {/* <div className="img-wrapper dev-bdr">
          <img src={fb_headshot} alt="professional head and shoulders" />
        </div> */}
        <div className="text-wrapper ">
          <h2 className="header-md ">Hey, I'm Patrick!</h2>
          <p className="about-me-text ">
            {" "}
            <img src={fb_headshot} alt="professional head and shoulders" />
            I’m a full-stack web developer specializing in the MERN (Mongo,
            Express, React, Node) stack. With a sharp understanding of the
            mobile-first approach, I prioritize building responsive,
            lightweight, and component-driven applications. With 3 years of
            hands-on experience in web development and technology education, I
            excel in collaborative environments. My strong communication skills
            enable me to seamlessly engage with clients and team members to
            ensure timely, high-quality results. Feel free to explore my
            projects, delve into my GitHub repositories, or connect with me on
            LinkedIn. I look forward to collaborating with you and bringing your
            ideas to life!
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
