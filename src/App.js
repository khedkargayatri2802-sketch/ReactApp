import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to react Application
        </p>
        <a
          className="App-link"
          href="https://ciitstudent.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
        CIIT Training Institude
        </a>
      </header>
    </div>
  );
}

export default App;
