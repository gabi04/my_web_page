import { AboutMeTwoStyles } from "./AboutMeStyles";
import CV from "../../sources/pdfs/CV.pdf";
import HV from "../../sources/pdfs/HV.pdf";

const AboutMeTwo = () => (
  <AboutMeTwoStyles className="about-me-two">
    <h1 className="about-me-two__title">I code cool websites</h1>
    <div>
      <a
        href={HV}
        download="Gabriela Suarez CV"
        className="about-me-two__cv about-me-two__cv--spanish"
      >
        Currículum en español
      </a>
      <a
        href={CV}
        download="Gabriela Suarez CV en ingles"
        className="about-me-two__cv about-me-two__cv--english"
      >
        Currículum en inglés
      </a>
    </div>
    <p className="about-me-two__paragraph">
      Soy una ingeniera con una fuerte ética de trabajo con un título en
      Ingeniería de Sistemas y Computación y 3 años de amplia experiencia en el
      mundo de la tecnología. Desde entonces he trabajado para start ups de last
      mile como Instaleap y Quick. He aprendido la importancia de moverse rápido
      y de manera sostenible para mantenerse en el negocio y entregar valor
      mientras creo código de calidad.
    </p>
  </AboutMeTwoStyles>
);

export default AboutMeTwo;
