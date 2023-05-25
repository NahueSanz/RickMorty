import "./About.css";
import img from "../Imagenes/foto-mima.png";

const About = () => {
  return (
    <div className="about-me-container">
      <img className="foto" src={`${img}`} alt="My Profile" />
      <h1 className="title">About Me</h1>
      <p className="content">
        Hello, my name is Nahuel and I am a dedicated professional in the field
        of [your field or industry]. With [number] years of experience, I have
        developed a strong expertise in [specific skills or areas of focus]. I
        am passionate about [a specific aspect or goal related to your work].
      </p>
      <p className="content">
        Throughout my career, I have successfully [highlight an achievement or
        accomplishment relevant to your work]. I pride myself on [a
        characteristic or quality that sets you apart], and I strive to deliver
        high-quality results in every project I undertake.
      </p>
      <p className="content">
        I am constantly seeking opportunities to expand my knowledge and stay
        up-to-date with the latest developments in [relevant industry or
        technology]. I believe in the power of collaboration and enjoy working
        in teams to achieve shared goals.
      </p>
      <p className="content">
        In addition to my professional work, I also enjoy [mention a hobby or
        personal interest that relates to your overall profile]. It helps me
        maintain a balanced and creative approach to my work.
      </p>
      <p className="content">
        I am excited about the opportunity to contribute my skills and expertise
        to [mention the organization or type of projects you are interested in].
        I am confident that my strong work ethic, attention to detail, and
        ability to [mention another relevant skill or quality] make me a
        valuable asset to any team.
      </p>
      <p className="content">
        Thank you for taking the time to learn more about me. I look forward to
        the possibility of working together and making a meaningful impact.
      </p>
    </div>
  );
};

export default About;
