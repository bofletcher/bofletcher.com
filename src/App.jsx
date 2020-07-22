import React, { Component } from 'react';
import Draggable, {DraggableCore} from 'react-draggable';
import styles from  './App.module.css';
import Menu from './components/Menu/Menu';
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About';
import Projects from './components/Pages/Projects/Projects';
import Resume from './components/Pages/Resume/Resume';
import Contact from './components/Pages/Contact/Contact';
import DesktopIcons from './components/DesktopIcons/DesktopIcons'


import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


class App extends Component {
  state = {
    menuOpen: false,
    windowOpen: false,
    currentPage: ""
  }

  menuToggle = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  windowClose = () => {
    this.setState({
      windowOpen: false
    })
  }

  windowOpen = (pageName) => {
    this.setState({
      windowOpen: true,
      currentPage: pageName
    })
  }

  


  render() {

   let  attachedStyles = [ styles.window95, styles.windowClosed ];
    if(this.state.windowOpen){
      attachedStyles = [styles.window95, styles.windowOpen]
    }

  return (
    <Router basename="/" >
        <div className={styles.Desktop}>
          <DesktopIcons openWindow ={this.windowOpen} />
          <Draggable>
            <div className={attachedStyles.join(' ')}>
              <div className={styles.windowTopbar}> {this.state.currentPage} <div onClick={this.windowClose} className={styles.closeBtn}>X</div></div>
              <div className={styles.windowBody}>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/resume" exact component={Resume}/>
                    <Route path="/contact" exact component={Contact} />
                  </Switch>
                </div>
            </div>
            </Draggable>
            <Menu open ={this.state.menuOpen} click={this.menuToggle}  openWindow ={this.windowOpen}/>
        </div>
    </Router>   
    );
  }
}

export default App;
