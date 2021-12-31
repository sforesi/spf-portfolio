import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
