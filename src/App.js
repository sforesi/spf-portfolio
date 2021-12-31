import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Resume from './Resume.js'; 
import About from './About.js'; 


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <img src={logo} className="App-logo" alt="logo" />
          <a 
          href='' 
          className='item'>
            Projects
          </a>
          <a 
          href='' 
          className='item'>
            Resume
          </a>
          <a 
          href='' 
          className='item'>
            About
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
