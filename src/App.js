import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Resume from './Resume.js'; 
import About from './About.js'; 


function App() {
  return (
    <BrowserRouter>
      <div className="App">

      <Routes>
        <Route exact path="/" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
      </Routes>
      
        <div className="navigation">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='navigation-sub'>

          <Link to="/" className="item">Projects</Link>
            <Link to="/resume" className="item">Resume</Link>
            <Link to="/about" className="item">About</Link>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
