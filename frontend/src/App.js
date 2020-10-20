import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from "./components/Home.js"

function App() {
  return (
      <div className="App">
        <div className="container">
          <Home/>
        </div>
      </div>
  );
}

export default App;