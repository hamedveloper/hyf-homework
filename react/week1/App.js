//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Counter } from './components/Counter'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { ToDoListTable } from './components/MyToDoList'
import { UserAtt } from './components/UserItemExpanded'

export function App() {
  return (
    <Router>
      <div>
        <header>
          <ul>
            <li>
              <Link to="/counter">Counter Homework</Link>
            </li>
            <li>
              <Link to="/todolist">To To List Homework</Link>
            </li>
            <li>
              <Link to="/exercises">Class Exercises</Link>
            </li>
          </ul>
          <div class="switchBox">
            <Switch>
              <Route exact path="/counter" component={Counter}/>
              <Route exact path="/todolist" component={ToDoListTable}/>
              <Route exact path="/exercises" component={UserAtt}/>
            </Switch>
          </div>
        </header>
      </div>
    
    </Router>
  );   
};    
 


