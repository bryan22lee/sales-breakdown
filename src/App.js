import Home from './Home';
import { Mail } from './Mail';
import { Calendar } from './Calendar';
import { Completed } from './Completed';
import { Organization } from './Organization';
import { Settings } from './Settings';
import Sidebar from './components/Sidebar';
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <Router>
        {/* header navigation */}
        <NavigationBar />

        <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mail" component={Mail} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/completed" component={Completed} />
          <Route path="/organization" component={Organization} />
          <Route component={Settings} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
