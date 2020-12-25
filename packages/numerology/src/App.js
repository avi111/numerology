import logo from './logo.svg'
import './App.css'
import numerologyEngine from "@maya259/numerology-engine";

const {Gematria} = numerologyEngine;

function App() {
  const avi = new Gematria('אבי');
  return (
    <div className="App">
      <header className="App-header">
        <p>avi small: {avi.small}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
