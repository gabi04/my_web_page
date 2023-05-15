import { AboutMeStyles } from "./AboutMeStyles";
import AboutMeOne from "./AboutMeOne";
import AboutMeTwo from "./AboutMeTwo";

const AboutMe = () =>
  window.matchMedia("(max-width: 768px)").matches ? (
    <AboutMeStyles className="about-me__container">
      <div className="about-me__container-one" />

      <div className="about-me__container-two">
        <AboutMeTwo />
      </div>
      <AboutMeOne />
    </AboutMeStyles>
  ) : (
    <AboutMeStyles className="about-me__container">
      <div className="about-me__container-one" />
      <div className="about-me__container-two" />
      <div className="about-me">
        <AboutMeOne />
        <AboutMeTwo />
      </div>
    </AboutMeStyles>
  );

export default AboutMe;
