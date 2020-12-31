import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Fragment } from 'react';
import { Toggle } from "./components/Toggel/Toggle";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fragment>
          <a
            className="App-link"
            href="https://ScriptHammer.com"
            target="_blank"
            rel="noopener noreferrer"
            title="TechBlog"
          >
            {/* fccTempLate */}
            <span className="App-hammer">
              <img src={logo} className="App-logo" alt="logo" />
            </span>
          </a>
          <Toggle></Toggle>
          <h3>
            <a
              className="App-link"
              href="hhttps://github.com/TurtleWolfe/Toggle"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Repo"
            >
              <i className="fab fa-github"></i> GitHub Repo <i className="fab fa-github"></i>
            </a>
          </h3>
          <h4>
            <a
              className="App-link"
              href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects"
              target="_blank"
              rel="noopener noreferrer"
              title="FreeCodeCamp.com Front End Projects"
            >
              <i className="fab fa-free-code-camp"></i> Front End Projects <i className="fab fa-free-code-camp"></i>
            </a>
          </h4>
          <h5>
            <a
              className="App-link"
              href="https://www.twitch.tv/collections/mgPReDzBVBbReg"
              target="_blank"
              rel="noopener noreferrer"
              title="These Episodes on Twitch I build a template for my freeCodeCamp projects, with FontAwesome, React-BootStrap & Analytics"
            >
              <i className="fab fa-twitch"></i> These Episodes on Twitch <i className="fab fa-twitch"></i>
            </a>
          </h5>
        </Fragment>
      </header>
    </div>
  );
}

export default App;
