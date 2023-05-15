import { AboutMeStyles } from "./AboutMeStyles";
import AboutMeOne from "./AboutMeOne";
import AboutMeTwo from "./AboutMeTwo";

const AboutMe = () => (
  <AboutMeStyles className="about-me__container">
    <div className="about-me">
      <AboutMeOne />
      <AboutMeTwo />
    </div>
  </AboutMeStyles>
);

export default AboutMe;
