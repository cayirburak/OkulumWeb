import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Home} from "./components/Home.js"
import {StudentAdd} from "./components/StudentAdd.js"
import {Sidebar} from "./components/sidebar/Sidebar"
import {StudentInfo} from "./components/studentInfo/StudentInfo"
import {Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
      <Router>
          <div className="App">
              <div className="container-fluid">
                  <Sidebar/>
                  <switch>
                      <Route path="/appInfo" component={Home}/>
                      <Route path="/studentInfo" component={StudentInfo}/>
                      <Route path="/studentAdd" component={StudentAdd}/>
                  </switch>

              </div>
          </div>
      </Router>

  );
}

export default App;