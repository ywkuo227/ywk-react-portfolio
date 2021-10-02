import fileResume from "./resources/resume.pdf";
import imgMe from "./images/me.jpg"
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <header className="header">
        <h1>Yu-Wei William Kuo</h1>
        <nav>
          <div>
            <a href="#about-me">About Me</a>
          </div>
          <div>
            <a href="#work">Work</a>
          </div>
          <div>
            <a href="#contact-me">Contact Me</a>
          </div>
          <div>
            <a href={fileResume}>Resume</a>
          </div>
        </nav>
      </header>

      <div className="hero">
        <h2>Hello there!</h2>
      </div>

      <main>
        <section id="about-me">
          <h3><span>About</span><span> Me</span></h3>
          <article>
            <p className="aboutme">
              <img src={imgMe} alt="Image of myself" />
              Full-stack Web Developer with Business Administration degree (concentration in Management
              Information Systems and Operations Management) from Western Washington University. Have experiences
              in C# and ASP.NET and Rapid Application Development. Recently received a certificate in full stack
              web development from Coding Boot Camp from University of Washington. Known to come up with creative
              ways of solving critical problems, I am thrilled to apply newly developed skill in HTML, CSS,
              JavaScript, and responsive web design into solving challenges, empowering everyone to achieve more.
            </p>
          </article>
        </section>

        <section id="work">
          <h3>Work</h3>
          <article class="work">

          </article>
        </section>
      </main>

      <footer>
        <div>
          <a href="tel:+14255039206">425.503.9206</a>
          <a href="mailto:ywkuo@outlook.com">ywkuo@outlook.com</a>
          <a href="https://github.com/ywkuo227">GitHub</a>
          <a href="https://www.linkedin.com/in/ywkuo/">LinkedIn</a>
          <a href="https://music.apple.com/profile/niling0227">Apple Music</a>
        </div>
      </footer>

    </div>
  );
}

export default App;
