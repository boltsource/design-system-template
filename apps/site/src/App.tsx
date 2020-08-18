import React from 'react';
import logo from './logo.svg';
import './App.css';
import { XPButton } from '@xproduct/ui'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <XPButton title="Welcome" onPress={() => { alert('Hello, Web') }} />
      </header>
    </div>
  );
}

export default App;
