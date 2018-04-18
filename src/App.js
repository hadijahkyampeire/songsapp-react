import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast'
import {Provider} from 'react-redux';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import store from './Reducers/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
      <BrowserRouter>
      <div className="App">
      <Notifications/>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Dashboard}/>
       </Switch>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
