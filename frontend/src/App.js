import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Home} from "./components/Home.js"
import {StudentAdd} from "./components/StudentAdd.js"
import {Sidebar} from "./components/sidebar/Sidebar"
import Footer from "./components/footer/Footer"
import {StudentInfo} from "./components/studentInfo/StudentInfo"
import {Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (

          <div className="page-container">
              <div className="content-wrap">
                  <Router>
                      <Sidebar/>
                          <div className="container-fluid">
                              <switch>
                                  <Route exact path="/" component={Home}/>
                                  <Route path="/studentInfo" component={StudentInfo}/>
                                  <Route path="/studentAdd" component={StudentAdd}/>
                              </switch>
                          </div>
                  </Router>
              </div>
              <Footer/>
          </div>

  );
}

export default App;