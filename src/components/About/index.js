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
            I am a dedicated web developer with a passion for crafting robust
            and efficient applications using the MERN (MongoDB, Express.js,
            React.js, Node.js) stack. With several years of experience in the
            field, I have honed my skills in creating dynamic and interactive
            web solutions that meet the unique needs of each project.
          </p>

          <p className="about-me-text">
            My expertise in front-end development combined with back-end
            experience, allows me to seamlessly integrate user-facing elements
            with server-side logic. I thrive in collaborative environments,
            where I can leverage my strong communication skills to work closely
            with clients and team members to deliver high-quality results on
            time and within budget. Whether I'm building a responsive user
            interface or optimizing database performance, I approach each task
            with creativity, attention to detail, and a commitment to
            excellence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
