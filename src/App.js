import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About';
import Projects from './components/Pages/Projects/Projects';
import Resume from './components/Pages/Resume/Resume';
import Contact from './components/Pages/Contact/Contact';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
  <Router basename="/" >
      <div className="Desktop">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/resume" exact component={Resume}/>
            <Route path="/contact" exact component={Contact} />
          </Switch>
          <Menu />
      </div>
  </Router>   
  );
}

export default App;
