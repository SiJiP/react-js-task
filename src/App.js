import React from 'react';
import './App.scss';
import ToDoList from './containers/ToDoList/ToDoList'
import Layout from './components/Layout/Layout'
import { Route, Switch } from 'react-router-dom';
import API from './containers/API/API'

function App() {


  return (
    <div className="App">
      <Layout />
      <Switch>
        <Route path="/todo" component={ToDoList}></Route>
        <Route path="/API" component={API}></Route>
      </Switch>
    </div>
  );
}

export default App;
