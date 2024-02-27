import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Skills from "./components/Skills";
import "./global.scss";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Skills />
      <Education />
      <Experience/>
      <ContactMe />
    </div>
  );
}

export default App;
