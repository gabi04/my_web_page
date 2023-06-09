import photo from "../../sources/images/photo.JPG";
import LinkedIn from "../../svg/LinkedIn";
import GitHub from "../../svg/GitHub";
import { AboutMeOneStyles } from "./AboutMeStyles";

const AboutMeOne = () => (
  <AboutMeOneStyles className="about-me-one">
    <div className="about-me-one__about-me">
      <img
        className="about-me-one__about-me__photo"
        src={photo}
        alt="about-me"
      />
      <h1>Gabriela Suárez</h1>
      <hr className="about-me-one__about-me__hr" />
      <p className="about-me-one__about-me__role">FRONTEND DEVELOPER</p>
    </div>
    <div className="about-me-one__social-media">
      <a
        href="https://www.linkedin.com/in/gabrielasuarezcarvajal/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn size={40} />
      </a>
      <a href="https://github.com/gabi04" target="_blank" rel="noreferrer">
        <GitHub size={40} />
      </a>
    </div>
  </AboutMeOneStyles>
);

export default AboutMeOne;
