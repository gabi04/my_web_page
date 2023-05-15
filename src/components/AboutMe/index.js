import { AboutMeStyles } from "./AboutMeStyles";
import AboutMeOne from "./AboutMeOne";
import AboutMeTwo from "./AboutMeTwo";

const AboutMe = () => (
  <AboutMeStyles>
    <div className="about-me__bg--one" />
    <div className="about-me__bg--two" />
    <div className="about-me">
      <AboutMeOne />
      <AboutMeTwo />
    </div>
  </AboutMeStyles>
);

export default AboutMe;
