import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome to React!</h3>
        <a
          className="App-link"
          href="/xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open xml view
        </a>
      </header>
    </div>
  );
}

export default App;
