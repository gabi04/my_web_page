import { AppStyles } from "./AppStyles";
import photo from "./images/photo.JPG";
import GitHub from "./svg/GitHub";
import LinkedIn from "./svg/LinkedIn";

//TODO
// cv
// responsive

function App() {
  return (
    <AppStyles>
      <div className="about-me__bg--one" />
      <div className="about-me__bg--two" />
      <div className="about-me">
        <div className="about-me--one">
          <div className="about-me--one__about-me">
            <img
              className="about-me--one__about-me__photo"
              src={photo}
              alt="about-me"
            />
            <h1>Gabriela Suárez</h1>
            <hr className="about-me__about-me__hr" />
            <p className="about-me__about-me__role">FRONTEND DEVELOPER</p>
          </div>
          <div className="about-me--one__social-media">
            <a
              href="https://www.linkedin.com/in/gabrielasuarezcarvajal/"
              className="about-me--one__social-media__svg"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="https://github.com/gabi04"
              className="about-me--one__social-media__svg"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
          </div>
        </div>
        <div className="about-me--two">
          <h1 className="about-me--two__title">Hola</h1>
          <p className="about-me--two__paragraph">
            Soy una ingeniera con una fuerte ética de trabajo con un título en
            Ingeniería de Sistemas y Computación y 3 años de amplia experiencia
            en el mundo de la tecnología. Desde entonces he trabajado para start
            ups de last mile como Instaleap y Quick. He aprendido la importancia
            de moverse rápido y de manera sostenible para mantenerse entregar
            valor mientras creo código de calidad.
          </p>
        </div>
      </div>
    </AppStyles>
  );
}

export default App;
