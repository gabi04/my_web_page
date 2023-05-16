import { AppStyles } from "./AppStyles";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <AppStyles>
      <AboutMe />
      <Skills />
      <Contact />
    </AppStyles>
  );
}

export default App;
