import { AppStyles } from "./AppStyles";
import photo from "./images/photo.JPG";

function App() {
  return (
    <AppStyles>
      <div className="about-me__bg--one" />
      <div className="about-me__bg--two" />
      <div className="about-me">
        <div className="about-me--one">
          <img className="about-me--one__photo" src={photo} alt="about-me" />
          <h1>Gabriela Suárez</h1>
          <hr className="about-me__hr" />
          <p className="about-me__role">FRONTEND DEVELOPER</p>
        </div>
        <div className="about-me--two">
          Nam sodales, turpis nec aliquet blandit, libero eros varius enim, vel
          dapibus velit est sit amet lacus. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Cras finibus
          consequat cursus. Aenean a scelerisque est, ut lacinia dui. Ut
          imperdiet convallis nibh, at semper mi sodales sit amet. Pellentesque
          id dictum dolor. Maecenas sollicitudin arcu id orci suscipit, a
          fringilla dui pellentesque. Etiam dapibus, velit nec sollicitudin
          pulvinar, diam metus laoreet diam, quis dapibus ante nisi ac ante.
        </div>
      </div>
    </AppStyles>
  );
}

export default App;
