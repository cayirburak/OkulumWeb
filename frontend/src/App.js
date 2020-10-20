import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from "./components/Home.js"
import {Sidebar} from "./components/sidebar/Sidebar";

function App() {
  return (
      <div className="App">
        <div className="container-fluid">
          <Sidebar/>
            <Home/>
        </div>
      </div>
  );
}

export default App;