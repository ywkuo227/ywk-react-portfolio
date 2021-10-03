import './App.css';
import Header from "./components/Header";
import AboutMe from "./components/pages/AboutMe";
import Project from "./components/pages/Project";
import ContactMe from './components/pages/ContactMe';
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
        <AboutMe />
        <Project />
        <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
